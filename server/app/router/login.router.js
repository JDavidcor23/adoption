const express = require("express");
const { login } = require("../functions");
const nameRoutes = require("../constants/nameRoutes.constants.js");

const router = express.Router();

router.post(nameRoutes.DEFAULT, async (request, response) => {
  try {
    login(request, response);
  } catch (error) {
    response.send("Error");
  }
});
module.exports = router;
