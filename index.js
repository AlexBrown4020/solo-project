const { ApolloServer } = require('apollo-server');
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const app = require('./app')

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ 
    resolvers, 
    typeDefs,
  });
server.applyMiddleware({ app })
server.listen(PORT, () => {
    console.log(`Server ready at port ${PORT}`);
});