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
    AllEvents: [Event]
    AllActors: [Actor]
    FindActor(name:String): Actor
    FindEvent(title:String): Event
}

input AddEvent {
    date: Date!
    description: String!
}

input AddActor {
    name: String!
    country: String
}

input UpdateEvent {
    title: String
    date: Date
    description: String
}

input UpdateActor {
    name: String
    country: String
}

type Mutation {
    AddEvent(input:AddEvent): Event
    AddActor(input:AddActor): Actor
    DeleteActor(name:String): String
    DeleteEvent(title:String): String
    UpdateActor(name:String!, input:UpdateActor): String
    UpdateEvent(title:String!, input:UpdateEvent): String
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
        AllEvents: () => events,
        AllActors: () => actors,
        FindEvent: (parent, args) => {
            for (let object of events) {
                if (object.title === args.title) return object;
            }
        },
        FindActor: (parent, args) => {
            for (let object of actors) {
                if (object.name === args.name) return object;
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
                    return "Actor removed successfully"
                } else {
                    return "No actor by that name."
                }
            }
        },
        DeleteEvent: (parent, args) => {
            for (let object of events) {
                if (args.title === object.title) {
                    const index = events.indexOf(object);
                    events.splice(index, 1)
                    return "Event removed successfully"
                } else {
                    return "No event by that name."
                }
            }
        },
        UpdateActor: (parent, args) => {
            for (let object of actors) {
                if (object.name === args.name) {
                    const index = actors.indexOf(object);
                    actors[index] = args.input;
                    return "Actor updated successfully"
                }
            }    
            return "No actor found with that name"
            }
        },
        // UpdateEvent: (parent, args) => {
        //     for (let object of events) {
        //         if (object.title === args.title){
        //             object = args.input;
        //             return object;
        //         }
        //     }
        // }
};

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen(PORT, () => {
    console.log(`Server ready at ${PORT}`)
});