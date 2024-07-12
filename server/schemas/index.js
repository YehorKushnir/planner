import {buildSchema} from "graphql";
import {userSchema} from "./user-schema.js";

export default buildSchema(`
    ${userSchema}
`)

