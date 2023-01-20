const AdminModel = require("../models/admin/adminModel");


const checkLogIn=function (req,res,next,err){
    console.log("check login middleware");
  if(req.user){
    next();
    console.log(req.user)
  }else{
    console.log(err)
    res.send("Error, Kindly login")
  }

}
module.exports.checkLogIn=checkLogIn;