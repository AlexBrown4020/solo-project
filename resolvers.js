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
                .returning("title");
        },
        // AddActor: (parent, args) => {
        //     actors.push(args.input);
        //     return args.input;
        // },
        // DeleteActor: (parent, args) => {
        //     for (let object of actors) {
        //         if (args.name === object.name) {
        //             const index = actors.indexOf(object);
        //             actors.splice(index, 1)
        //             return "Actor removed successfully"
        //         } else {
        //             return "No actor by that name."
        //         }
        //     }
        // },
        // DeleteEvent: (parent, args) => {
        //     for (let object of events) {
        //         if (args.title === object.title) {
        //             const index = events.indexOf(object);
        //             events.splice(index, 1)
        //             return "Event removed successfully"
        //         } else {
        //             return "No event by that name."
        //         }
        //     }
        // },
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