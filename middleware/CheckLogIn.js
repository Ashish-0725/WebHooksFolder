const checkLogIn=function (req,res,next){
    console.log("check login middleware");
  if(req.user!=undefined){
    next();
    console.log(req.user)
  }else{
    res.send("Error, Kindly login")
  }

}
module.exports.checkLogIn=checkLogIn;


//     // AdminModel.findOne({_id:userId},(err,found)=>{
//     //     if(err){
//     //         console.log("error");
//     //         res.sendStatus(404);
//     //     }else{
//     //         if(found){
//     //             console.log("found");
//     //             req.user=found;
//     res.send("kindly login");
//             console.log("kindly login");
                
//             // }else{
//             //     console.log("not found");
//             //     res.sendStatus(404);
//             // }
//         }else{
//             next()
//         }
// //     })
// //   }