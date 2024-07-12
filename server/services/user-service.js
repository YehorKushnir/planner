import User from "../models/user-model.js";
import bcrypt from "bcrypt";

export default class UserService {
    static async signUp(username, email, password, password_confirmation) {
        // if (password !== password_confirmation) {
        //     throw new Error(`Passwords are not the same`)
        // }
        //
        // const candidateByEmail = await User.findOne({email})
        // const candidateByUsername = await User.findOne({username})
        //
        // if (candidateByEmail) {
        //     throw new Error(`This email already exists`)
        // }
        // if (candidateByUsername) {
        //     throw new Error(`This username already exists`)
        // }
        //
        // const hashPassword = await bcrypt.hash(password, 3)
        //
        // const user = await User.create({name, email, password: hashPassword})
        //
        // const tokens = tokenService.generateTokens({...userDto});
        // await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            user: {
                username: "yehor",
                email: "yehor.kushnir@gmail.com",
                password: "123",
                password_confirmation: "123",
            },
            tokens: {
                refreshToken: 'refreshToken',
                accessToken: 'accessToken'
            }
        }
    }
    static async signIn(name, email, password) {

    }
    static async checkAuth() {

    }
    static async refreshTokens() {

    }
    static async logout() {

    }
}