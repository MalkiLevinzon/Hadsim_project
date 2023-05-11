const express=require('express')
const controllerVaccination=require('../controller/vaccination')
const router=express.Router();

router.get("/",controllerVaccination.getAll);
router.get("/:personId",controllerVaccination.GetById);
router.post("/",controllerVaccination.AddNewVaccination);


module.exports=router;