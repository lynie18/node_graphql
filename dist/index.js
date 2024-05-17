var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { createServer } from 'http';
import { expressMiddleware } from '@apollo/server/express4';
import gql from 'graphql-tag';
// Construct schema
const typeDefs = gql `
  type Query {
    hello: String
  }
`;
// Resolver functions for schema
const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
};
function startApolloServer(typeDefs, resolvers) {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        const httpServer = createServer(app);
        // Middleware to parse JSON requests
        app.use(express.json());
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        });
        yield server.start();
        app.use('/graphql', expressMiddleware(server));
        httpServer.listen({ port: 3000 }, () => {
            console.log(`Server ready at http://localhost:3000/graphql`);
        });
    });
}
startApolloServer(typeDefs, resolvers);
