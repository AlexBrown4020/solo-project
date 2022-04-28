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
    Mutation: {//REMINDER: AddEvent and AddActor do not return what is expected
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
        // UpdateActor: (parent, args) => {
        //     for (let object of actors) {
        //         if (object.name === args.name) {
        //             const index = actors.indexOf(object);
        //             actors[index] = args.input;
        //             return "Actor updated successfully"
        //         }
        //     }    
        //     return "No actor found with that name"
        //     }
        // },
        // UpdateEvent: (parent, args) => {
        //     for (let object of events) {
        //         if (object.title === args.title){
        //             object = args.input;
        //             return object;
        //         }
        //     }
        // }
    }
}