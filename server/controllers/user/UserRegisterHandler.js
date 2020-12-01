//module export
module.exports = (app, db) => {
  app.post("/reg/usr", (req, res) => {
    //variables
    const userFName = req.body.userFName;
    const userAge = req.body.userAge;
    const userGender = req.body.userGender;
    const userBloodGroup = req.body.userBloodGroup;
    const userPhone = req.body.userPhone;
    const userMail = req.body.userMail;
    const userPlace = req.body.userPlace;
    const userUserName = req.body.userUserName;
    const userPassword = req.body.userPassword;

    //query
    const sqlInsert1 =
      "INSERT INTO user_details (userFName,userAge,userGender,userBloodGroup,userPhone,userMail,userPlace) VALUES (?,?,?,?,?,?,?)";

    const sqlInsert2 =
      "INSERT INTO user_login (user_id,userUserName,userPassword) VALUES (?,?,?)";

    const sqlDelete = "DELETE  FROM user_details WHERE user_id= ?";
    //
    db.query(
      sqlInsert1,
      [
        userFName,
        userAge,
        userGender,
        userBloodGroup,
        userPhone,
        userMail,
        userPlace,
      ],
      (err, result) => {
        if (err) console.log(err + " **ERROR  INSERTING USER** ");
        else {
          var user_id = result.insertId;
          //
          db.query(
            sqlInsert2,
            [user_id, userUserName, userPassword],
            (err, result1) => {
              if (err) {
                console.log(err);
                db.query(sqlDelete, [user_id], (err, result2) => {
                  if (err) console.log(err);
                  else {
                    console.log("hi");
                  }
                });
              } else {
                console.log("**USER REGISTRATION SUCCESSFULL**");
              }
            }
          );
        }
      }
    );
    res.send("all good!");
  });
};
