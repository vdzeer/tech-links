import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String
    links: [Link!]!
  }

  type Link {
    id: ID!
    title: String!
    url: String!
    description: String
    user: User!
  }

  type Query {
    allUsers: [User!]!
    allLinks: [Link!]!
  }

  type Mutation {
    createUser(email: String!, name: String, password: String!): User!
    createLink(
      title: String!
      url: String!
      description: String
      userId: Int!
    ): Link!
  }
`

export default typeDefs
