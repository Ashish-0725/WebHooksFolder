require("../node_modules/passport");
const CheckAuthentication=function(req,res,next){
  if(req.isAuthenticated()){
    console.log("authenticated");
    next();
  }else{
    console.log("Error while authenticating");
    res.send("error while authenticating");
  }
}
module.exports.CheckAuthentication=CheckAuthentication;
