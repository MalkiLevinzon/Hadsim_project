const express=require('express')
const controllerCorona=require('../controller/corona')
const router=express.Router();

router.get("/",controllerCorona.getAll);
router.get("/:personId",controllerCorona.GetById);
router.post("/",controllerCorona.AddNewDisease);


module.exports=router;