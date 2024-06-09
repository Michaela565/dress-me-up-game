const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const connection = require("./connection.json");

const app = express();
app.use(express.json());
app.use(cors());

catgerories = ["top", "bottom"];

const db = mysql.createConnection(connection);

db.connect((err) => {
  if (err) console.log("Connection failed", err);
  console.log("Connected to the database");
});

app.get("/", (req, res) => {
  return res.json("From backend side");
});

app.get(`/clothes/:title`, (req, res) => {
  let found = false;
  catgerories.forEach((category) => {
    console.log(category);
    if (category == req.params.title) {
      found = true;
      const sql = `SELECT ci.* FROM Clothing_Item ci JOIN Clothing_Category cc ON ci.ID = cc.Clothing_Item_ID JOIN Category c ON cc.Category_ID = c.ID WHERE c.Name = '${req.params.title}'`;
      db.query(sql, (err, data) => {
        console.log(db.state);
        if (err) throw err;
        return res.json(data);
      });
    }
  });
  if (!found) {
    return res.json(`The category ${req.params.title} doesn't exist.`);
  }
});

app.post("/upload-clothing-item", (req, res) => {
  // post processing to be added
  console.log(req.body);
});

app.listen(8081, () => {
  console.log("listening");
  console.log(db.state);
});

// 3306
