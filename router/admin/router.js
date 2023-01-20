const express=require("express");
const router=express.Router();

const SuperAdminController=require("../../controller/SuperAdmin/superAdminController");
const {CheckAuthentication}=require("../../middleware/CheckAuth");
// const {checkLogIn}=require("../../middleware/CheckLogIn");

router.post("/login",SuperAdminController.login);

router.get("/home",CheckAuthentication,SuperAdminController.home);

//Create
router.post("/home/addNewAdmin",CheckAuthentication,SuperAdminController.addNewAdmin);
//ReadAllSuperAdmins
router.get("/home/getSupAdmins",CheckAuthentication,SuperAdminController.getSupAdmins);

//Read_ParticularSuperAdmin
router.post("/home/getSupAdmins/read/:supAdminId",CheckAuthentication,SuperAdminController.readSuperAdmin);

//Update_Super_Admin
router.post("/home/getSupAdmins/edit/:supAdminId",CheckAuthentication,SuperAdminController.editSuperAdmin);

//Delete_Super_Admin
router.post("/home/getSupAdmins/delete/:supAdminId",CheckAuthentication,SuperAdminController.deleteSuperAdmin);

//------------------------------------sub Admin CRUD by Super Admin ----------------------------------------

//Create
router.post("/home/addSubAdmin",CheckAuthentication,SuperAdminController.addSubAdmin);

router.get("/home/readSubAdmins",CheckAuthentication,SuperAdminController.readSubAdmins);

router.post("/home/deleteSubAdmin/:subAdminId",CheckAuthentication,SuperAdminController.deleteSubAdmin);

router.post("/home/editSubAdmin/:subAdminId",CheckAuthentication,SuperAdminController.editSubAdmin);

router.delete("/logout",CheckAuthentication,SuperAdminController.adminLogout);

module.exports=router;