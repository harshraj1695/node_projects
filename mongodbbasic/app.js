const express=require('express');
const app= express();

const userModel =require('./usermodel');
// const usermodel = require('./usermodel');

app.get('/',(req,res)=>{
    res.send("hey");
})
app.get('/create',async (req,res)=>{
    let createduser = await userModel.create({ //async code
        name: "harshitsa",
        email: "harsggh@gamil.com",
        username: "harsh"
    })
    res.send(createduser)
})
app.get('/update',async (req,res)=>{
   let updateduser = await userModel.findOneAndUpdate({username: "harsh"},{name:"yash"},{new:true})
   res.send(updateduser);
})
app.get('/read',async (req,res)=>{
   let users = await userModel.find();
   res.send(users);
})

app.get('/delete',async (req,res)=>{
    let users = await userModel.findOneAndDelete({name: "harsh"})
    res.send(users);
 })
app.listen(3000);