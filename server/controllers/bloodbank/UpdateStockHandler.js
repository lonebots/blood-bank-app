//module export
module.exports = (app, db) => {
  app.get('/login/emp/ub', (req, res) => {
    //query
    const sqlSelect = "SELECT * FROM blood_stocks;";

    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
};
