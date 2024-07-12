import {buildSchema} from "graphql";
import {authSchema} from "./auth-schema.js";

export default buildSchema(`
    ${authSchema}
`)

