module.exports = (app, db) => {
  app.get("/home", (req, res) => {
    //query
    const sqlSelect = "SELECT * from blood_stocks;";

    //db search
    db.query(sqlSelect, (err, result) => {
      res.send(result);
      // console.log(result);
    });
  });
};
