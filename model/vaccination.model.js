const { json } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//חיסונים
const VaccinationSchema = new Schema({
    // code: {
    //     type: Number,
    //     unique:true,
    //     index:true,
    //        },
    personId: {
        // type: mongoose.Schema.Types.ObjectId,
        type:String,
		// ref: 'person',
        required:true,
        unique:false,

    },
    date:{
    
        type:Date,
        required:true,
        max: [new Date(), "datePositive cannot be in the future"],
        min: ['2021-01-01', "recoveryDat "], 

    }

,
    //יצרן
    manufacturer:{
        type:String,
        required:true,

    }}


);

VaccinationSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
//create object 
const Vaccination = mongoose.model('vaccination', VaccinationSchema);
//create colection 
Vaccination.createCollection().then(function (collection) {
    console.log('Collection is created!');
})

Vaccination.createIndexes();
module.exports  = Vaccination;