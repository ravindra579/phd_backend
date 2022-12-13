
const express = require("express");

const mysql = require("mysql");
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ravindra1712@",
  database: "env",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});


app.get("/updateemployee/:id", (req, res) => {

  let newName = "Updated name";

  let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;

  let query = db.query(sql, (err) => {

    if (err) {

      throw err;

    }

    res.send("Post updated...");

  });

});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});

module.exports=app