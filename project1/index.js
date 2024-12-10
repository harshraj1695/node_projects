const express = require('express');
const app=express();
const path=require('path');
//setting up parsers
//form cna be handeled
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//use to setup public file
app.use(express.static(path.join(__dirname,'public')));

//setting up ejs 
app.set('view engine','ejs'); //backedn with render ejs pages


app.get("/",function(req,res){
    res.render("index");  // at "/" route index.ejs will be render
});
app.get("/profile/:username",function(req,res){
    res.send(`wlcome ${req.params.username}`);  // at "/" dynamic route
});
app.get("/profile/:username/:age",function(req,res){
    res.send(`wlcome ${req.params.username} ${req.params.age}`);  // at "/" dynamic route mutiple
});


app.listen(3000,function(){
    console.log("Server is running on port 3000");
})