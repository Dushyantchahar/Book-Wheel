const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt=require('bcrypt');
const Razorpay =require('razorpay');
const authenticate = require("../middleware/authenticate");

require('../app');
const User =require("../model/userSchema");
router.get('/', (req,res)=>{
    res.send(`Hello router server`);
});
// Handling register
router.post('/register',async(req,res)=>{

    const {name, email, password, mobile}=req.body;
    // const {name, email, password, mobile, gender, dob}=req.body;
    if(!name || !email || !password || !mobile ){
        // if(!name || !email || !password || !mobile || !gender || !dob){
        return res.status(422).json({error:"fill the field properly"});
    }
    try{

        const userExist= await User.findOne({email:email});
 
    
        if(userExist){

            return res.status(422).json({error:"Email already exit"});
        }

        const user= new User({name, email, password, mobile});
        // const user= new User({name, email, password, mobile, gender, dob});

    await user.save();

            res.status(201).json({message:"user registered"});
        
    }catch(err){
console.log(err)
    };
});

// Handling Login

router.post('/signin',async(req,res)=>{
    // let token;

        const {email, password}=req.body;
        if(!email || !password){

            return res.status(400).json({error:"plz filled the data"});
        }
    try {
        
        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const isMatch =await bcrypt.compare(password,userLogin.password);
    console.log("h3");

            token = await userLogin.generateAuthToken();
console.log(token);
console.log("h4");

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
    console.log("h5");
            
        
            if(!isMatch){

            res.status(400).json({message:"user error"});
    
            }else{

            res.json({message:"user signin successfully"});}
        // const user= User({name, email, password, mobile});
// 
            // res.json(user);}
        }else{

            res.status(400).json({message:"user error"});

        }


    } catch(err){
        
        console.log(err);
    }
})


router.get('/user', async (req, res) => {
    const { email } = req.body; // Assuming the email is provided as a query parameter

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Respond with user data
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Authentication
router.get('/profile',authenticate,(req,res)=>{
    console.log("kkkkkkkkkkk");
    res.send(req.rootUser);
});

router.get('/logout',(req,res)=>{
    console.log("logout");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User logout');
})


router.post("/orders", async(req, res)=> {
    try {
    const razorpay = new Razorpay({
    key_id:'Razorpay_ID',
    key_secret:'Razorpay_Secret',
    });
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if (!order) {
    return res.status(500).send("Error");
    }
    res.json(order);
}catch(err){
    console.log(err);
    res.status(500).send("Error");
}
});
module.exports= router;