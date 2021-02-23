// imports
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

// Import and load the .env file
require("dotenv").config();
const port = process.env.PORT;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(cors());

app.get("/select", (req, res) => {
  db.query("SELECT * FROM note_data", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/insert", (req, res) => {
  const title = "new Title";
  const content = "new content!!";
  db.query(
    "INSERT INTO note_data (title, content)VALUES (?, ?)",
    [title, content],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.listen(port, () => {
  console.log("server running");
});
