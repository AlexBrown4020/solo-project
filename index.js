const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

scalar Date

type Event {
    date: Date!
    description: String!
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

type Mutation {
    AddEvent(input:AddEvent): Event
}

`;

const events = [
        {
            date: "2022-02-14",
            description: "CCP4 started Code Chrysalis."
        },
        {
            date: "2022-04-18",
            description: "CCP4 started their laundry week."
        },
        {
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
        }
    }
};

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen(PORT, () => {
    console.log(`Server ready at ${PORT}`)
});