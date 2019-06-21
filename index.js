const Express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const handler = require("./handler");

const express = new Express();
express.use(cors());
express.use(bodyParser.json());

express.post("/login", handler.login);
express.post("/register", handler.register);

express.listen(3000, () => console.log("Server running on port 3000"));
