var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //middileware

//module export
module.exports=(app,db)=>{
    app.post("/login/usr",(req,res)=>{
        //variables
        const userUserName=req.body.userUserName;
        const userPassword=req.body.userPasswork;

        //query
        const sqlSelect = " SELECT * FROM user_login WHERE userUserName = ? AND userPassoword = ?;"

        //
        db.query(sqlSelect,[userUserName,userPassword],(err,result)=>{
            if (err){
               res.send({err: err})
            }
     

            if(result.length>0){
                res.send(result)

            }else{
                res.send({message : "wrong username/password combination!"})
            }
        })
    })
}