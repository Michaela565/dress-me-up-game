/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const util = require("util");
const connection = require("./connection.json");

const app = express();
app.use(express.json());
app.use(cors());

const catgerories = ["top", "bottom"];

const db = mysql.createConnection(connection);

db.connect((err) => {
  if (err) console.log("Connection failed", err);
  console.log("Connected to the database");
});

// Promisify the query for easy async use
const query = util.promisify(db.query).bind(db);

app.get("/", (req, res) => {
  return res.json("From backend side");
});

app.get(`/clothes/:title`, async (req, res) => {
  let found = false;
  catgerories.forEach((category) => {
    if (category == req.params.title) {
      found = true;
    }
  });
  if (found) {
    try {
      // Selects the whole row that fits the criteria, the app itself then selects which column it needs to use
      const sql = `SELECT ci.* FROM Clothing_Item ci JOIN Clothing_Category cc ON ci.ID = cc.Clothing_Item_ID JOIN Category c ON cc.Category_ID = c.ID WHERE c.Name = '${req.params.title}'`;
      const data = await query(sql);
      return res.json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Database query failed" });
    }
  } else {
    return res.json(`The category ${req.params.title} doesn't exist.`);
  }
});

const get_last_used_id = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const sql_last_used_id = "SELECT MAX(id) AS lastid FROM clothing_item";
    const maxID = await query(sql_last_used_id);
    return maxID[0].lastid;
  } catch (err) {
    throw err;
  }
};

app.post("/upload-clothing-item", async (req, res) => {
  const data = req.body;
  // checks the data validity
  if (
    data.name &&
    data.category &&
    data.color &&
    data.fit &&
    data.length &&
    data.type &&
    data.tags &&
    data.imgPath
  ) {
    try {
      // Inserts new c
      const sql_new_ci = `INSERT INTO Clothing_Item (name, color, fit, length, type, imageURL, tags) VALUES ('${data.name}', '${data.color}', '${data.fit}', '${data.length}', '${data.type}', '${data.imgPath}',  '${data.tags}')`;
      await query(sql_new_ci);
      const last_used_id = await get_last_used_id();
      const sql_put_into_c = `INSERT INTO Clothing_Category (clothing_item_ID, category_ID) VALUES (${last_used_id}, ${data.category})`;
      await query(sql_put_into_c);
      res.status(201).send("Clothing item uploaded successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Database operation failed");
    }
  } else {
    res.status(400).send("Invalid data");
  }
  console.log(req.body);
  console.log(req.body.name);
});

app.listen(8081, () => {
  console.log("listening");
  console.log(db.state);
});

// 3306
