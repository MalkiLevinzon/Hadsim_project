// const { json } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const person=require("./person.model");

// create chema & model
const CoronaSchema = new Schema({
    // code: {
    //     type: Number,
    //     unique:true,
    //     index:true,
    //     required: [true, 'Roll field is required']    },
    personId: {
         type:Schema.Types.ObjectId,
	    ref: 'person',
        type:String,
        unique:true,
        required:[true,"it is required"]

    },

    DateOfPositive: {
        type:Date,
        max: [new Date(), "datePositive cannot be in the future"],    },
    dateOfRecovery:{
        type:Date,
        max: [new Date(), "datePositive cannot be in the future"],   
        // min: [CoronaSchema.DateOfPositive+7, "recoveryDate cannot be before 7 days from dateOfPositive"],
        
    },
   

});

CoronaSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
//create object 
const Corona = mongoose.model('corona', CoronaSchema);
//create colection 
Corona.createCollection().then(function (collection) {
    console.log('Collection is created!');
})

Corona.createIndexes();
module.exports  = Corona;