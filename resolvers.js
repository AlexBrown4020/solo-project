const { actors, events } = require("./data");

module.exports = {
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
}