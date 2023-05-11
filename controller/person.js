const express=require("express");
const db=require("../model/index");
const person=db.person;



function AddPerson(req,res)
{

    let newPerson =req.body ;
    console.log(newPerson)
    person.create(newPerson).
    then((obj)=>{res.send(obj)})
    .catch((err)=>{res.status(500).send(err)})

}



async function GetById(req,res)
{
    let id=req.params.personId ;
    try
    {
        let data =await person.find({"personId":id})
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
        let data =await person.find({})
        res.send(data);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
   
   

}

module.exports={getAll,GetById,AddPerson};