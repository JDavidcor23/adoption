import express from "express";
import jwt from "jsonwebtoken";
import { nameRoutes } from "../constants/index.js";
import USERS from "../data/users.json" assert { type: "json" };

const router = express.Router();

router.post(nameRoutes.DEFAULT, async (request, response) => {
  try {
    const user = request.body;
    const userExists = USERS.find(
      (u) => u.password === user.password && u.email === user.email
    );
    if (userExists !== undefined) {
      jwt.sign({ userExists }, "secretKey", (err, token) => {
        response.json({ token });
      });
    } else {
      response.status(403).json({ resp: "Invalid email or password" });
    }
  } catch (error) {
    throw new Error(error);
  }
});
export { router };
