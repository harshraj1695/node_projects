const express =require('express');
const app = express();
const path=require('path');
const fs=require('fs');
const { log } = require('console');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));


app.get('/',function(req,res){
    fs.readdir(`./files`,function(err,files){
       // console.log(files);
        res.render("index",{files: files}); //i am give respose in index.ejs by name "file" through files folder
        
    })
    
})
app.get('/file/:filename',function(req,res){
   fs.readFile(`./files/${req.params.filename}`, "utf-8",function(err,filedata){
             res.render('show',{filename:req.params.filename,filedata:filedata});
   })
    })
app.get('/edit/:filename',function(req,res){
  res.render('edit', {filename:req.params.filename});
    })
    // delete file name
    app.get('/delete/:filename', function (req, res) {
        const filename = req.params.filename;
        fs.unlink(`./files/${filename}`, function (err) {
            if (err) {
                console.error("Error deleting file:", err);
                res.status(500).send("Error deleting file");
                return;
            }
            res.redirect('/');
        });
    });
    
app.post('/edit',function(req,res){
    // console.log(req.body);
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,function(err){
        res.redirect("/");
    })
    })
    

app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('_')}`,req.body.details,function(err){ //req.body.detail is the content of file
       res.redirect('/');
    });
    
})




app.listen(3000);