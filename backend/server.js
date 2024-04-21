const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "L0r3m/psUm;",
    database: 'clothingapp'
});

db.connect((err) => {
    if(err) console.log("Connection failed", err);
    console.log("Connected to the database")
});

app.get('/', (req, res) => {
    return res.json("From backend side");
});

app.get('/Clothing_item_imageURL', (req, res) => {
    
    const sql = "SELECT imageURL FROM Clothing_item";
    db.query(sql, (err, data) => {
        console.log(db.state)
        if(err) throw err;
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("listening");
    console.log(db.state);
});

// 3306