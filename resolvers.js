const db = require('./knex');

module.exports = {
    Query: {
        AllEvents: async () => {
            return await db('events').select('*');
        },
        AllActors: async () => {
            return await db('actors').select('*');
        },
        FindEventByTitle: async (parent, args) => {
            return await db.select()
                .where({title: args.title})
                .from('events')
                .first();
        },
        FindEventsByDate: async (parent, args) => {
            return await db.select('*')
                .where({date: args.date})
                .from('events');
        },
        FindActorByName: async (parent, args) => {
            return await db.select()
                .where({name: args.name})
                .from('actors')
                .first();
        },
        FindActorsByCountry: async (parent, args) => {
            return await db.select('*')
                .where({country: args.country})
                .from('actors');
        },
        FindActorsByDateOfBirth: async (parent, args) => {
            return await db.select('*')
            .where({date_of_birth: args.date_of_birth})
            .from('actors');
        },
        FindActorsByAge: async (parent, args) => {
            return await db.select('*')
            .where({age: args.age})
            .from('actors');
        },
        FindActorById: async (parent, args) => {
            return await db.select()
            .where({id: args.id})
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
        },
        AddInvolvement: (parent, args) => {
            return db.insert(args.id, args.title)
            .into('involvement')
            .then((row) => 'Successfully added involvement')  
        }
    }
}