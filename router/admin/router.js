const express=require("express");
const router=express.Router();

const SuperAdminController=require("../../controller/SuperAdmin/superAdminController");
const {CheckAuthentication}=require("../../middleware/CheckAuth");
const {checkLogIn}=require("../../middleware/CheckLogIn");

router.post("/login",SuperAdminController.login);

router.get("/home",checkLogIn,SuperAdminController.home);

//Create
router.post("/home/addNewAdmin",checkLogIn,SuperAdminController.addNewAdmin);
//ReadAllSuperAdmins
router.get("/home/getSupAdmins",checkLogIn,SuperAdminController.getSupAdmins);

//Read_ParticularSuperAdmin
router.post("/home/getSupAdmins/read/:supAdminId",checkLogIn,SuperAdminController.readSuperAdmin);

//Update_Super_Admin
router.post("/home/getSupAdmins/edit/:supAdminId",checkLogIn,SuperAdminController.editSuperAdmin);

//Delete_Super_Admin
router.post("/home/getSupAdmins/delete/:supAdminId",checkLogIn,SuperAdminController.deleteSuperAdmin);

//sub Admin CRUD

//Create
router.post("/home/addSubAdmin",checkLogIn,SuperAdminController.addSubAdmin);

router.get("/home/readSubAdmins",checkLogIn,SuperAdminController.readSubAdmins);


module.exports=router;