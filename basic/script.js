const express = require('express');
const app = express();


//middleware
// app.use(function(req,res,next){
//     console.log('Time:',Date.now());
//     next();
// });
app.use(express.json());
app.use(express.urlencoded({extended:true}));





app.get('/', function (req, res) {
  res.send('Hello dhk havf hvsa hvf World');
});
app.get('/about', function (req, res) {
  res.send('Hello harh here');
});
app.use(function(err, req,res,next){
    console.error(err.stack);
    res.status(500).send("something wen wrong");
});

app.listen(3000)