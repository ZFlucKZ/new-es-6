let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mysql = require("mysql");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//homepage route
app.get("/", (req, res) => {
  return res.send({
    error: false,
    message: "wellcome to RESTFUL CRUD API with NodeJS, Express, Mysql",
    written_by: "New audio",
    published_on: "https://newaudio.dev",
  });
});

//connection to mysql database
let dbCon = mysql.createConnection({
  host: "192.168.2.101",
  user: "nattaphon",
  password: "NtS00690",
  database: "nattaphon",
});
dbCon.connect();

// retrieve all books
app.get("/book", (req, res) => {
  dbCon.query("SELECT * FROM nodejs", (error, results, fields) => {
    if (error) return res.send({ error: true, message: "Error" });
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "NodeJS table is emty";
    } else {
      message = "Susscessfully retrieved all ";
    }
    return res.send({ error: false, data: results, message: message });
  });
});

date = Date.now();
console.log(date);

// add a new book
app.post("/esp", (req, res) => {
  let name = req.body.name;
  //let time = req.body.time;

  // validation
  if (!name) {
    return res.status(400).send({ error: true, message: "Please provide book name and author." });
  } else {
    dbCon.query("INSERT INTO nodejs (name) VALUES(?)", [name], (error, results, fields) => {
      if (error) return res.send({ error: true, message: "Error" });
      return res.send({ error: false, data: results, message: "Book successfully added" });
    });
  }
});

app.listen(3000, () => {
  console.log("Node app is running or port 3000");
});
module.exports = app;
