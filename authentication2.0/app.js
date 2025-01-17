const express = require('express');
const app = express();
const userModel = require("./models/user");
const bcrypt = require('bcrypt');


const cookieParser = require('cookie-parser');
const path = require('path');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.render('indes');
});

app.post('/create',  (req, res) => {
    let { username, email, password, age } = req.body;

   bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt, async(err,hash)=>{
       let createduser = await userModel.create({
        username,
        email,
        password: hash,
        age
    })
    res.send(createduser);
    })
   })


   //before password hassing 
    // let createduser = await userModel.create({
    //     username,
    //     email,
    //     password,
    //     age
    // })
    // res.send(createduser);

});



app.listen(3000);
