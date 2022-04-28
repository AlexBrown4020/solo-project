const { default: knex } = require('knex');
const db = require('./knex');

module.exports = {
    Query: {
        AllEvents: async () => {
            return await db('events').select('*')
        },
        AllActors: async () => {
            return await db('actors').select('*');
        },
        FindEvent: async (parent, args) => {
            return await db.select()
                .where({title: args.title})
                .from('events')
                .first();
        },
        FindActor: async (parent, args) => {
            return await db.select()
                .where({name: args.name})
                .from('actors')
                .first();
        }
    },
    Mutation: {
        AddEvent: (parent, args) => {
                return db.insert(args.input)
                .into('events')
                .then((row) => "Added Successfully");
        },
        AddActor: (parent, args) => {
            return db.insert(args.input)
            .into('actors')
            .then((row) => "Added Successfully");
        },
        DeleteActor: (parent, args) => {
            return db('actors')
            .where({name: args.name})
            .del()
            .then((row) => "Deleted Successfully");
        },
        DeleteEvent: (parent, args) => {
           return db('events')
           .where({title: args.title})
           .del()
           .then((row) => "Deleted Successfully");
        },
        UpdateActor: (parent, args) => {
            return db('actors')
            .where('name', '=', args.name)
            .update(args.input)
            .then(response => 'Actor Updated');

        },
        UpdateEvent: (parent, args) => {
            return db('events')
            .where('title', '=', args.title)
            .update(args.input)
            .then(response => 'Event Updated');
        }
    }
}