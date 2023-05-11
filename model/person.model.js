const { json } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const corona=require("./corona.model")

// create chema & model
const PersonSchema = new Schema({
    fullName: {
        type: String,
    },
    
      personId: {
        type: String,

        unique:true,
       required: [true, 'Roll field is required'],
        minlength:6,
        maxlength:9,

    },
    DateOfBirth:{
      type:Date,
      max: [new Date(), "datePositive cannot be in the future"],    },      
    

      adress:{
        city:{
        type: String,
        },
         street:{
        type: String,
    
        },
        houseNumber:{
        type: Number,
    
    
     
        }
    },
      phone:{
        type: String,
      },
      mobilePhone:{
        type: String,
      }
      


});
PersonSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Person = mongoose.model('person', PersonSchema);
// create colection 
Person.createCollection().then(function (collection) {
    console.log('Collection is created!');
})

Person.createIndexes();
module.exports  = Person;