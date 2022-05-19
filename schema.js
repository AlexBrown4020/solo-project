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

type Involvement {
    actor_id: Int!
    event_title: String!
}

type Query {
    AllEvents: [Event]
    AllActors: [Actor]
    FindActorByName(name:String): Actor
    FindActorsByCountry(country:String): [Actor]
    FindActorsByDateOfBirth(date_of_birth:Date): [Actor]
    FindActorsByAge(age: Int): [Actor]
    FindActorById(id: Int): Actor
    FindEventsByDate(date:Date): [Event]
    FindEventByTitle(title:String): Event
    FindInvolvementById(actor_id: Int): [Involvement]
    FindInvolvementByTitle(event_title: String): [Involvement]
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

input AddInvolvement {
    actor_id: Int!
    event_title: String!
}


type Mutation {
    AddEvent(input:AddEvent): String
    AddActor(input:AddActor): String
    DeleteActor(name:String): String
    DeleteEvent(title:String): String
    UpdateActor(name:String!, input:UpdateActor): String
    UpdateEvent(title:String!, input:UpdateEvent): String
    AddInvolvement(input:AddInvolvement): String
}
`
module.exports = typeDefs;