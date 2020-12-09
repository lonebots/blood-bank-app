//moduleexport
module.exports = (app, db) => {
  app.post("/login/emp/uh", (req, res) => {
    //variables
    const user_id = req.body.userId;

    //query
    const sqlSelect = "SELECT * FROM user_details WHERE user_id=?";

    //
    db.query(sqlSelect, [user_id], (err, result) => {
      if (err) {
        console.log("**ERROR FETCHING USER DETAILS**");
      } else {
        res.send(result);
      }
    });
  });

  //update request
  app.put("/login/emp/uh", (req, res) => {
    //variables
    const user_id = req.body.user_id;
    const userVitals = req.body.userVitals;
    const userHeight = req.body.userHeight;
    const userWeight = req.body.userWeight;
    const userStatus = req.body.userStatus;

    //query
    const sqlUpdate =
      "UPDATE user_health SET userVitals=?, userHeight=?, userWeight=?,userStatus=? WHERE user_id=?";

    ////
    db.query(
      sqlUpdate,
      [userVitals, userHeight, userWeight, userStatus, user_id],
      (err, result) => {
        if (err) {
          console.log("** ERROR **" + err);
        } else {
          res.send({message:"HEALTH UPDATED SUCCESSFULLY!"})
          console.log("**SUCCESSFULL UPDATE**");
        }
      }
    );
  });
};
