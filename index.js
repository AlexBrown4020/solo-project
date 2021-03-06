const { ApolloServer } = require('apollo-server-express');
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const serverSetup = require('./app');
const app = serverSetup();
const PORT = process.env.PORT || 4000;
const db = require('./knex');

(async () => {
  const server = new ApolloServer({ 
    resolvers, 
    typeDefs,
  });
  await server.start();
  server.applyMiddleware({ app, path: "/" });
  await db.migrate.latest();
  await db.seed.run();
  app.listen(PORT, () => {
      console.log(`Server ready at port ${PORT}`);
  });
})();
