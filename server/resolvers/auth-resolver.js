export const authResolver = {
    getAllUsers: () => {
        return 'users'
    },
    getUser: ({id}) => {
        return 'user'
    },
    createUser: ({input}) => {
        return 'create'
    }
}