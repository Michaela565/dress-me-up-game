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

app.get('/', (req, res) => {
    return res.json("From backend side");
});

app.get('/clothing_item', (req, res) => {
    const sql = "SELECT * FROM clothing_item";
    db.query(sql, (err, res) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("listening");
});

// 3306