import express from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { nameRoutes } from "../constants/index.js";
import USERS from "../data/users.json" assert { type: "json" };

const router = express.Router();

router.post(nameRoutes.DEFAULT, async (request, response) => {
  try {
    const uuid = uuidv4();
    const user = { ...request.body, uuid };
    USERS.push(user);
    jwt.sign({ user }, "secretKey", (err, token) => {
      response.json({ token });
    });
  } catch (error) {
    throw new Error(error);
  }
});
export { router };
