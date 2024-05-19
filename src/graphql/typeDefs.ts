
import { gql} from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        hello: String
    }
    type Mutation {
        add(username: String!): String
    }

    type Information{
        accountID: ID!
        username: String!
        password: String!
        balance: Int!
    }
    
    type Loan{
        loanID: ID!
        Amount: Int!
        dateCreated: String!
    }
    type Savings{
        savingsID:ID!
        balance: Int!
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
    `
;
export default typeDefs;
