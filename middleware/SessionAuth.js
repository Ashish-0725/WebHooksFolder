var SessionChecker=(req,res,next)=>{
if(req.session.user && req.cookies.user_id){
    next();
}else{
    res.send("try again");
}
}
module.exports.SessionChecker=SessionChecker;