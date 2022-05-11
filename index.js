const app = require("./src/app");
const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
  port: 3306,
});

con.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("connected successfully");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
