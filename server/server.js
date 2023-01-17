

import mysql from 'mysql'
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'


//controllers
//user function handlers
import UserLoginHandler from "./controllers/user/userLoginHandler.js";
import UserRegisterHandler from './controllers/user/UserRegisterHandler.js';
import RequestClassHandler from './controllers/bloodbank/RequestClassHandler.js';



//employee function handlers
import EmployeeLoginHandler from './controllers/employee/EmployeeLoginHandler.js';
import EmployeeRegisterHandler from './controllers/employee/EmployeeRegisterHandler.js';
import UpdateBlood from './controllers/bloodbank/UpdateStockHandler.js'
import UpdateHealthHandler from './controllers/bloodbank/UpdateHealthHandler.js';
import HandleRequestHandler from './controllers/bloodbank/HandleRequestHandler.js';

//dashboard
import DashboardHandler from './controllers/dashboard/DashboardHandler.js';
import SearchHandler from './controllers/bloodbank/SearchHandler.js';

//create the app
var app = express();

// middilewares set app to use the body-parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password@123",
  database: "bbms",

});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//user functionalities
UserRegisterHandler(app, db);
UserLoginHandler(app, db);
RequestClassHandler(app, db);

//employee functionalities
EmployeeRegisterHandler(app, db);
EmployeeLoginHandler(app, db);
UpdateHealthHandler(app, db);
HandleRequestHandler(app, db);

//bloodbank functionalities
DashboardHandler(app, db);
UpdateBlood(app, db);
SearchHandler(app, db);

//listening the port
app.listen(3001, (err) => {
  if (err) throw err;
  else console.log("listening to port : 3001");
});
