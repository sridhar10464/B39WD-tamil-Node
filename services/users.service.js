
import { client } from "../index.js";


export async function createUser(data) {
  return await client
    .db("b39wd")
    .collection("users")
    .insertOne(data);
}

export async function getUserByName(username) {
  return await client
    .db("b39wd")
    .collection("users")
    .findOne({username: username});
}

