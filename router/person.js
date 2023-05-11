const express=require('express')
const controllerPerson=require('../controller/person')
const router=express.Router();

router.get("/",controllerPerson.getAll);
router.get("/:personId",controllerPerson.GetById);
router.post("/",controllerPerson.AddPerson);


module.exports=router;
