import UserService from "../services/user-service.js";

export const authResolver = {
    signUp: async ({username, email, password, password_confirmation}, req, res) => {
        try {
            const userData = await UserService.signUp(username, email, password, password_confirmation)
            // res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return userData
        } catch (e) {
            throw new Error(e)
        }
    },
    signIn: async ({usernameOrEmail, password}, req, res) => {
        return 'user'
    },
    refresh: async (_args, req, res) => {
        return 'create'
    },
    logout: async (_args, req, res) => {
        return 'create'
    },
    check: async (_arg, req, res) => {

    }
}