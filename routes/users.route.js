import express from "express";
import { createUser, getUserByName } from "../services/users.service.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = express.Router();

async function genHashedPassword(password){
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS); //random string
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hashedPassword);
  return hashedPassword;
}

 router.post("/signup", async function(request, response) {
     const {username, password}= request.body;
    // console.log(data)
    // db.movies.insertOne(data)

    const userFromDB = await getUserByName(username);
    console.log(userFromDB);

  if(userFromDB) {
      response
      .status(400)
      .send({ message: "username already exists" });
    } 
  else if (password.length < 8) {
      response
      .status(400)
      .send({ message: "Password must be atleast 8 charecters" });
    } 
  else {
    const hashedPassword = await genHashedPassword(password);
      console.log(password, hashedPassword);
    
    const result = await createUser({
      username: username,
      password: hashedPassword,
    });

    response.send(result);
   }

  });


 router.post("/login", async function(request, response) {
    const {username, password}= request.body;
   // console.log(data)
   // db.movies.insertOne(data)

   const userFromDB = await getUserByName(username);
   console.log(userFromDB, password);

 if(!userFromDB) {
     response
     .status(401)
     .send({ message: "Invalid credentials" });
   } else {
    const storedDBPassword = userFromDB.password;
    const isPasswordMatch = await bcrypt.compare(password, storedDBPassword);
    console.log(isPasswordMatch);
    if (isPasswordMatch) {
      const token = jwt.sign({id: userFromDB._id}, process.env.SECRET_KEY)
      response.send({ message: "Successful login ✨🎉🎊", token: token });
    } else {
      response.status(401).send({ message: "Invalid credentials" });
    }
   }
 });

    export default router;

    


