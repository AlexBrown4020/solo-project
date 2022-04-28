const { gql } = require("apollo-server");
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

`

module.exports = typeDefs;