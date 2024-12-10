
const express =require('express');
const cookieParser =require('cookie-parser');
const app=express();
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');



//cokkie mangement

app.use(cookieParser());
// app.get('/', function(req,res){
//         res.cookie("name","harshii"); //respond the cookie
//         res.send("done");
// })
// app.get('/create', function(req,res){
//     console.log(req.cookies);//read cookie
//         res.send("done create");
// })


//bycript uses
// $2b$10$wg0jD4Eq00Om1q9BOzy5puICROTnD9WcFBxOEW5KwBFNtgUXYKP0q


//encyption of password

// app.get('/', function(req,res){
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("@Harsh1695", salt, function(err, hash) {
//             console.log(hash);
            
//         });
//     })
// })

//comparison of password

// app.get('/', function(req,res){
//     bcrypt.compare("@Harsh1695", "$2b$10$wg0jD4Eq00Om1q9BOzy5puICROTnD9WcFBxOEW5KwBFNtgUXYKP0q", function(err, result) {
//         console.log(result);
        
//     });
// })



//what is jwt and its uses


app.get('/', function(req,res){
  let token = jwt.sign({email:"harsh@gmail.com"},"screate");
//   console.log(token);
 res.cookie("token",token);
  res.send("done");
})

app.get('/create', function(req,res){
    console.log(req.cookies.token);//read cookie
        res.send("done create");
})


app.listen(3000);