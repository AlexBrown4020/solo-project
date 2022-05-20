const { ApolloServer } = require('apollo-server-express');
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const serverSetup = require('./app');
const app = serverSetup();
const PORT = process.env.PORT || 4000;

(async () => {
  const server = new ApolloServer({ 
    resolvers, 
    typeDefs,
  });
  await server.start();
  server.applyMiddleware({ app })
  app.listen(PORT, () => {
      console.log(`Server ready at port ${PORT}`);
  });
})();


// (async () => {
//   try {
//     console.log("Running migrations");
//     await db.migrate.latest();
//     console.log("Seeding data");
//     await db.seed.run();

//     const server = new ApolloServer({ typeDefs, resolvers });
//     console.log("Starting express");
//     await server.start();
//     server.applyMiddleware({ app, path: "/" });
//     app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
//   } catch (err) {
//     console.error("Error starting app!", err);
//     process.exit(-1);
//   }
// })();