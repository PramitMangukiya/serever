const mongoose = require('mongoose')

const testSchema: any = new mongoose.Schema({
    firstName : {type  : String},
    lastName : { type: String},
    fatherName : {type : String},
    motherName : {type : String},
    address : {type : String},
    gender : {type : String, enum:["male","female","other"]},
    hobby : {type : Array},
    state : {type : String},
    course : {type : String},
    dob:{type : Date},
    pinCode : {type : String},
    email : {type : String},

    isActive: { type: Boolean, default: true },
    isBlock: { type: Boolean, default: false },
    isLoggedIn : { type : Boolean , default : false},
}, { timestamps: true })

export const testModel = mongoose.model('test', testSchema);