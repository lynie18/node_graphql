import { gql } from 'graphql-tag';
export const typeDefs = gql `
    type Query{
        hello: String
    }
    type Mutation {
        greet(name: String!): String
    }

    #type Information {
     #   accountID: ID!,
      #  username: String!,
       # password: String!
    #}
    #type Branch {
     #   id: ID!,
      #  location: String!
    #}
    #type Query{
     #   reviews: [Reviews]
      #  informations: [Information]
    `;
export default typeDefs;
