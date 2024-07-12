import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {graphqlHTTP} from 'express-graphql';
import schema from "./schemas/index.js";
import rootValue from './resolvers/index.js';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue
}))

app.use(express.static('public'))

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(port, () => console.log(`Server started: http://localhost:${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()