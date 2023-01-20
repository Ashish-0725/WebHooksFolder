const passport=require("passport");
require("../node_modules/passport");
const CheckAuthentication=function(req,res,next,err){
  if(req.isAuthenticated()){
    console.log("authenticated");
    next();
  }else{
    console.log("Error while authenticating");
    res.send(err)
  }
}
module.exports.CheckAuthentication=CheckAuthentication;
