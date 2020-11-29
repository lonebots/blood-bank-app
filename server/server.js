var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var cors =require('cors')
//controllers
var userLoginHandler = require('./controllers/user/userLoginHandler');
var employeeLoginHandler=require('./controllers/employee/employeeLoginHandler');
var updateBlood =require('./controllers/employee/updateBlood.js')
//create the app
var app = express();

// middilewares set app to use the body-parser
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())

//config for database
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bbms",
  multipleStatements: true,
});

//user functionalities
userLoginHandler(app);


//employee functionalities
employeeLoginHandler(app);
updateBlood(app)






mysqlConnection.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log("connection failed!");
  }
});
//listening the port
app.listen(3001, (err) => {
  if (err) throw err;
  else console.log("listening to port : 3001");
});
