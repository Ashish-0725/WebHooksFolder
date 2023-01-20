const express=require("express");
const router=express.Router();

const SubAdminController = require("../../controller/SubAdmin/subAdminController")
// const {checkLogIn}=require("../../middleware/CheckLogIn");
const {SessionChecker}=require("../../middleware/SessionAuth");

router.post("/login",SubAdminController.subAdminLogin);

router.get("/home",SessionChecker,SubAdminController.home);

router.get("/logout",SessionChecker,SubAdminController.logout);

router.post("/home/addCustomer",SessionChecker,SubAdminController.addCustomer);

router.post("/home/sendMsg/:customerId",SessionChecker,SubAdminController.sendMsg);

module.exports=router;
