// imports
const express = require("express");
const mysql = require("mysql");
const app = express();

// Import and load the .env file
require("dotenv").config();
const port = process.env.PORT;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
