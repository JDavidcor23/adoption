import cors from "cors";
import express from "express";
import { routerApi } from "./router/router.js";

const app = express();

const port = 3000;

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  response.send("");
});
routerApi(app);
app.listen(port, () => {
  console.log("mi port " + port);
});
