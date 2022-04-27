const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

scalar Date

type Event {
    date: Date!
    title: String!
    description: String
}

type Actor {
    name: String!
    country: String
}

type Query {
    Events: [Event]
    Actors: [Actor]
    Actor(name:String): Actor
}

input AddEvent {
    date: Date!
    description: String!
}

input AddActor {
    name: String!
    country: String
}

type Mutation {
    AddEvent(input:AddEvent): Event
    AddActor(input:AddActor): Actor
    DeleteActor(name:String): String
    DeleteEvent(title:String): String
}

`;

const events = [
        {
            title:"First Class",
            date: "2022-02-14",
            description: "CCP4 started Code Chrysalis."
        },
        {
            title:"Half Way",
            date: "2022-04-18",
            description: "CCP4 started their laundry week."
        },
        {
            title:"First Projects",
            date: "2022-04-26",
            description: "CCP4 started their solo projects."
        },
    ];
const actors = [
        {
            name: "Alex",
            country: "Japan"
        },
        {
            name: "Eric",
            country: "United States"
        },
        {
            name: "JP",
            country: "United States"
        },
        {
            name: "Matt",
            country: "Japan"
        },
        {
            name: "May",
            country: "Japan"
        },
        {
            name: "Ravi",
            country: "South Korea"
        },
        {
            name: "Yuka",
            country: "Japan"
        }
    ];

const resolvers = {
    Query: {
        Events: () => events,
        Actors: () => actors,
        Actor: (parent, args) => {
            for (let object of actors) {
                if (object.name === args.name) return object
            }     
        }
    },
    Mutation: {
        AddEvent: (parent, args) => {
            events.push(args.input);
            return args.input;
        },
        AddActor: (parent, args) => {
            actors.push(args.input);
            return args.input;
        },
        DeleteActor: (parent, args) => {
            for (let object of actors) {
                if (args.name === object.name) {
                    const index = actors.indexOf(object);
                    actors.splice(index, 1)
                    console.log(actors);
                    return "Actor removed successfully"
                } else {
                    return "No actor by that name."
                }
            }
        },
        DeleteEvent: (parent, args) => {

        }
    }
};

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen(PORT, () => {
    console.log(`Server ready at ${PORT}`)
});