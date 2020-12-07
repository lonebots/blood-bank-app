//module exports 
module.exports =(app,db)=>{
    app.get("/login/emp/hr",(req,res)=>{
        //query
        const sqlSelect ="SELECT * FROM user_request"

        //
        db.query(sqlSelect,(err,result)=>{
            if(err){
                console.log("**ERROR**"+err)
            }
            if(result.length>0){
                res.send(result);
            }
        })

        
       
    })

    app.delete("/login/emp/hr/accept", (req, res) => {
        //query
        const sqlDelete="DELETE FROM user_request WHERE req_id= ?";
        //
        db.query(sqlDelete,(err,result)=>{
            if(err){
                console.log("**ERROR**"+err)
            }
            else{
                res.send({message: "REQUEST SERVED!"});
            }
        });

    });
}