//moduleexport
module.exports = (app,db)=>{
    app.post("/login/emp/uh",(req,res)=>{
        //variables
        const user_id= req.body.userId;

        //query
        const sqlSelect = "SELECT * FROM user_details WHERE user_id=?";

        //
        db.query(sqlSelect,[user_id],(err,result)=>{
            if(err){
                console.log("**ERROR FETCHING USER DETAILS**");
            }
            else{
                res.send(result);
            }
        })
    })
}