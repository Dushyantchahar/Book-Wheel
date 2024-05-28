const mongoose = require("mongoose");
const jwt= require("jsonwebtoken");
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    // gender: {
    //     type: String,
    //     required: true,
    // },
    // dob: {
    //     type: Date,
    //     required: false,
    // },
    tokens:[
        {
            token:{
                type: String,
        required: true,
            }
        }
    ]
});


 const SECRET_KEY='LIONLIONLIONLIONLIONLIONLIONLIONLIONLIONLIONLIONLION'
//hashing
UserSchema.pre('save',async function(next){

    if(this.isModified('password')){
         this.password= await bcrypt.hash(this.password, 12);
    }
    next();
})

    console.log("h1");

UserSchema.methods.generateAuthToken = async function(){
    try {
    console.log("h2");

let token= jwt.sign({_id:this._id},SECRET_KEY);
console.log("h6")
this.tokens= this.tokens.concat({token:token});
console.log("h7");

 await this.save();
console.log("h8");

 return token;
console.log("h9");
 
    }catch(err){
console.log(err);
    }
}

const User = mongoose.model('USER', UserSchema);

module.exports = User;