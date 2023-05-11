
const express=require("express");
const db=require("../model/index");
const vaccination=db.vaccination;
const person=db.person;


async function AddNewVaccination(req,res)
{

    let newVaccination =req.body ;
    let id=newVaccination.personId;
    let data=await person.findOne({"personId":id});
    if(data==null){
        res.status(500).send("personId is not difind");}
    
    else{
const count=await vaccination.countDocuments({"personId":id});
if(count<4){
    vaccination.create(newVaccination).
    
    then((obj)=>{res.send(obj)})
    .catch((err)=>{res.status(500).send(err)})
}
else{
    res.status(400).send("The maximum vaccination is 4")
}
}}



async function GetById(req,res)
{
    let id=req.params.persomId ;
    try
    {
        let data =await vaccination.find({"persomId":id})
        res.send(data);
    }
    catch(err)
    {
        res.status(500).send(err);
    }

}




async function getAll (req,res)
{ 
    try
    {
        let data =await vaccination.find({})
        res.send(data);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
   
   

}

module.exports={getAll,GetById,AddNewVaccination};