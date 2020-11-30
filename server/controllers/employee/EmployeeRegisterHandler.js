//module expor

module.exports = (app,db) => {
  
   app.post("/emp/reg", (req, res) => {
     //variables
     const empName = req.body.empName;
     const empMail = req.body.empMail;
     const empPhone = req.body.empPhone;
     const empAddrss = req.body.empAddrss;

     //query
     const sqlInsert1 =
       "INSERT INTO emp_details (empName,empMail,empPhone,empAddress) VALUES (?,?,?,?)";

    const sqlInsert2="INSERT INTO emp_login (userName,password) VALUES ( ? ,?)"
     //
     db.query(
       sqlInsert1,
       [empName, empMail, empPhone, empAddrss],
       (err, result) => {
         if (err) console.log(err + "erroris");
         else console.log(result);
       }
     );
   });
};
