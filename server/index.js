const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const EmployeeModel=require("./models/Employee")
const app=express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.listen(4080,()=>{
    console.log("server is listening");
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employee=>res.json("success"))
    .catch(err=>res.json("Error Try again"))

})

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
        if(user.password===password){
            res.json("success")
        }
        else{
            res.json("Password is incorrect")
        }
    }
    else{
        res.json("records not exists")
    }
    })
})
