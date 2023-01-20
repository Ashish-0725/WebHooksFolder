require("dotenv").config();
const bcrypt = require('bcrypt');
const express = require("express");
const session = require("express-session");
const cookieParser=require("cookie-parser");
const app = express();
// const myToken=process.env.MY_TOKEN;
// const token=process.env.TOKEN;
const mongoose = require("mongoose");
const passport = require("passport");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "/views"));

app.use(cookieParser());
app.use(
  session({
    key:"user_id",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());


//--------Database--------//
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://localhost:27017/BizChatDB",
  { useNewUrlParser: true, family: 4 },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("BizChat connected to Database");
    }
  }
);


const adminRouter = require("./router/admin/router");
app.use("/admin", adminRouter);

const subAdminRouter = require("./router/SubAdmin/router");
app.use("/subAdmin", subAdminRouter);


// app.get("/webhook",(req,res)=>{
//     //Extract parameter
//     let mode=req.query["hub.mode"]
//     let challenge=req.query["challenge"]
//     let token=req.query["hub.verify_token"]

//     //check request having mode and token
//     if(mode && token){
//         if(mode==="subscribe" && token===myToken){
//             res.status(200).send(challenge);
//         }else{
//             res.status(403);
//         }
//     }

// })

// app.post("/webhook",(req,res)=>{
//     let body_params=req.body;

//     console.log(JSON.stringify("body_params",null,2));

//     if(body_params.object){
//          if(body_params.entry &&
//             body_params.entry[0].changes &&
//             body_params.entry[0].changes[0].value.messages &&
//             body_params.entry[0].changes[0].value.messages[0]
//           ){
//             let phn_no_id=body.entry[0].changes[0].value.metadata.phone_no_id
//             let from =body.entry[0].changes[0].value.messages[0].from
//             let msg_body=body.entry[0].changes[0].values.messages[0].text.body;

//             axios({
//                 method:"POST",
//                 url:"https://graph.facebook.com/v15.0/"+phn_no_id+"/messages?access_token="+token,
//                 data:{
//                     messaging_product:"whatsapp",
//                     to:from,
//                     text:{
//                         body:"hi...I am Ashish"
//                     }
//                 },
//                 headers:{
//                     "Content-Type":"application/json"
//                 }
//             });
//             res.sendStatus(200);

//           }else{
//             res.sendStatus(404);
//           }
//     }
// })

app.listen(process.env.PORT || 3001, () => {
  console.log("listening at port 3000");
});
