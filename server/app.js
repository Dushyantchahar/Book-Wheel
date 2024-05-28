const dotenv = require("dotenv");
const mongoose = require('mongoose');
var express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const app =  express();
dotenv.config({path:'./config.env'});
const cors = require('cors');
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // Allow credentials (cookies, authorization headers)
  }));

mongoose.connect("mongodb://127.0.0.1:27017/Mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
        console.log(`connection successful`);
    }).catch((err)=>console.log(`no connection`));


app.use(express.json());

const User=require('./model/userSchema')
app.use(require('./router/auth'));



app.get('/',(req,res)=>{
res.send(`hello from server`);
});

app.get('/contact ',(req,res)=>{
    res.send(`hello contact from server`);
});


app.get('/routes',(req,res)=>{
    res.send(`hello routes from server`);
});
// router.get('/logout',(req,res)=>{
//     console.log("logout");
//     res.clearCookie('jwtoken',{path:'/'});
//     // res.status(200).send('User logout');
//     res.status(200);
// })
app.listen(8000,()=>{
    console.log(`server runnning at 8000`)
})