import express from 'express';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { createServer } from 'http';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
// Construct schemas
//const typeDefs = gql`
//type Query {
//hello: String
//}
//`;
// Resolver functions for schema
//const resolvers = {
//Query: {
//hello: () => 'Hello World!'
//}
//};
async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = createServer(app);
    // Middleware to parse JSON requests
    app.use(express.json());
    const server = new ApolloServer({
        typeDefs, //definition of types of data
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    app.use('/graphql', expressMiddleware(server));
    httpServer.listen({ port: 3000 }, () => {
        console.log(`Server ready at http://localhost:3000/graphql`);
    });
}
startApolloServer(typeDefs, resolvers);
