const { gql } = require("apollo-server");
const typeDefs = gql`

scalar Date

type Event {
    date: Date!
    title: String!
    description: String
}

type Actor {
    id: Int!
    name: String!
    country: String
    date_of_birth: Date
    age: Int
}

type Query {
    AllEvents: [Event]
    AllActors: [Actor]
    FindActorByName(name:String): Actor
    FindActorsByCountry(country:String): [Actor]
    FindActorsByDateOfBirth(date_of_birth:Date): [Actor]
    FindEventsByDate(date:Date): [Event]
    FindEventByTitle(title:String): Event
}

input AddEvent {
    title: String!
    date: Date!
    description: String
}

input AddActor {
    id: Int!
    name: String!
    country: String
    date_of_birth: Date
    age: Int
}

input UpdateEvent {
    title: String
    date: Date
    description: String
}

input UpdateActor {
    name: String
    country: String
    date_of_birth: Date
    age: Int
}

type Mutation {
    AddEvent(input:AddEvent): String
    AddActor(input:AddActor): String
    DeleteActor(name:String): String
    DeleteEvent(title:String): String
    UpdateActor(name:String!, input:UpdateActor): String
    UpdateEvent(title:String!, input:UpdateEvent): String
}

`

module.exports = typeDefs;