var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//controllers
//user function handlers
var UserLoginHandler = require("./controllers/user/UserLoginHandler");
var UserRegisterHandler = require("./controllers/user/UserRegisterHandler");
var RequestClassHandler =require("./controllers/bloodbank/RequestClassHandler")

//employee function handlers
var EmployeeLoginHandler = require("./controllers/employee/EmployeeLoginHandler");
var EmployeeRegisterHandler = require("./controllers/employee/EmployeeRegisterHandler");
var UpdateBlood = require("./controllers/bloodbank/UpdateStockHandler");
var UpdateHealthHandler = require("./controllers/bloodbank/UpdateHealthHandler");

//dashboard
var dashboardHandler = require("./controllers/dashboard/dashboardHandler");
var SearchHandler = require("./controllers/bloodbank/SearchHandler");

//create the app
var app = express();

// middilewares set app to use the body-parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//config for database
var db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bbms",
  // multipleStatements: true,
});

//user functionalities
UserRegisterHandler(app, db);
UserLoginHandler(app, db);
RequestClassHandler(app,db);

//employee functionalities
EmployeeRegisterHandler(app, db);
EmployeeLoginHandler(app, db);
UpdateHealthHandler(app, db);

//bloodbank functionalities
dashboardHandler(app, db);
UpdateBlood(app, db);
SearchHandler(app, db);

//listening the port
app.listen(3001, (err) => {
  if (err) throw err;
  else console.log("listening to port : 3001");
});
