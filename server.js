const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyparser.json());

// First DB: information (userdata table)
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Second DB: feedback (feed table)
const db2 = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME2,
});

// POST: Register user
app.post("/api/user", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO userdata (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ✅ FIXED: POST: Feedback (Correct route and DB)
app.post("/api/feedback", (req, res) => {
  const { name, phone, email, comment } = req.body;
  const sql = "INSERT INTO feed (name, phone, email, comment) VALUES (?, ?, ?, ?)";
  db2.query(sql, [name, phone, email, comment], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ✅ FIXED: Login route (should use db, not db2)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM userdata WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "DB error" });

    if (result.length > 0) {
      return res.json({ success: true, user: result[0] });
    } else {
      return res.json({ success: false, message: "Wrong credentials" });
    }
  });
});

// GET: Get all users
app.get("/api/user", (req, res) => {
  const sql = "SELECT * FROM userdata";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// GET: Get all feedback
app.get("/api/feed", (req, res) => {
  const sql = "SELECT * FROM feed";
  db2.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.listen(5000, () => {
  console.log("The server is listening on port 5000");
});
