const express=require("express");
const router=express.Router();

const SubAdminController = require("../../controller/SubAdmin/subAdminController")
const {CheckAuthentication}=require("../../middleware/CheckAuth");
const {checkLogIn}=require("../../middleware/CheckLogIn");


router.post("/login",SubAdminController.subAdminLogin);

router.get("/home",checkLogIn,SubAdminController.home);


module.exports=router;
