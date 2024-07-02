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
      // Selects the whole row that fits the criteria, the app itself then selects which column it needs to use
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
  const data = req.body;

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
    let last_used_id;
    const sql_last_used_id = "SELECT MAX(id) AS lastid FROM clothing_item";
    db.query(sql_last_used_id, (err, data) => {
      if (err) throw err;
      last_used_id = data[0].lastid;
    });

    const sql_new_ci = `INSERT INTO Clothing_Item (name, color, fit, length, type, imageURL, tags) VALUES ('${data.name}', '${data.color}', '${data.fit}', '${data.length}', '${data.type}', '${data.imgPath}',  '${data.tags}')`;
    const sql_put_into_c = `INSERT INTO Clothing_Category (clothing_item_ID, category_ID) VALUES ()`;
  } else {
    res.status(400).send("Invalid data");
  }
  // post processing to be added
  console.log(req.body);
  console.log(req.body.name);
});

app.listen(8081, () => {
  console.log("listening");
  console.log(db.state);
});

// 3306
