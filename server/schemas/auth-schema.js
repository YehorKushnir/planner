export const authSchema = `
    type User {
        id: ID
        name: String
        email: String
        password: String
    }
    input UserInput {
        id: ID
        name: String!
        email: String!
        password: String!  
    }
    type Query {
        getAllUsers: String
        getUser(id: ID): String
    }
    type Mutation {
        createUser(input: UserInput): String
    }
`