export const userSchema = `
    type Query {
        check: AuthResponse
    }
    
    type Mutation {
        signUp(username: String!, email: String!, password: String!, password_confirmation: String!): AuthResponse
        signIn(usernameOrEmail: String!, password: String!): AuthResponse
        refresh(token: String!): AuthResponse
        logout(token: String!): User
    }
    
    type User {
        id: ID!
        username: String!
        email: String!
    }
    
    type Tokens {
        accessToken: String
        refreshToken: String
    }
    
    type AuthResponse {
        user: User
        tokens: Tokens
    }
`