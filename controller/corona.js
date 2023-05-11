const express=require("express");
const db=require("../model/index");
const corona=db.corona;
const person=db.person;


async function AddNewDisease(req,res)
{
    
    let newDisease = req.body;
console.log(newDisease)
let id=req.body.personId ;
console.log(id);

    let data=await person.findOne({"personId":id});
   console.log(data)
    if(!(data==null)){
        corona.create(newDisease).
    
        then((obj)=>{res.send(obj)})
        .catch((err)=>{res.status(500).send(err)})}

    else
{;
    res.status(500).send("personId is not difind");}

}
        
    
        
   
    

  

async function GetById(req,res)
{
    let id=req.params.id ;
    try
    {
        let data =await corona.find({"personId":id})
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
        let data =await corona.find({})
        res.send(data);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
   
   

}

module.exports={getAll,GetById,AddNewDisease};