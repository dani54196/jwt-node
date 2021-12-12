require("dotenv/config");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { verify } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");

// 1_ Register a user
// 2_ Login a user
// 3_ Logout a user
// 4_ Setup a protected route
// 5_ Get a new access token with a refresh token

const server = express();

// User express middleware
server.use(cookieParser());

server.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
  })
);

// Neede to be able to read body data
server.use(express.json()); //to suport Json-encoded bodies
server.use(express.urlencoded({ extended: true })); // suport URL encoded

server.listen(process.env.PORT),
  () => {
    console.log(`server on port ${process.env.PORT}`);
  };

//config
