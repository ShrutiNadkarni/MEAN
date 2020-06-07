
const express = require('express');


const app = express();
const mongoose=require('mongoose');
const path=require('path');
const http=require('http');

const server=http.createServer(app);

// mongoose.connect('mongodb://localhost/company')
//     .then(() => console.log('Connected to MongoDB.....'))
//     .catch(err => console.error('Could not connect to Mongodb',err));

// config files
var db = require('./config/db');



// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url,{useNewUrlParser: true } ); 
app.use(express.static(path.join(__dirname,'dist')));



// app.get('/', (req, res) => {
//     res.render('login');
// });
// app.get('/slandingpg', (req, res) => {
//     res.render('slandingpg');
// });
// app.get('/companyinfo', (req, res) => {
//     res.render('companyinfo');
// });




// set our port
//const port = 4200;
//const port=8080;

//routes ==================================================
require('./routes'); // configure our routes



// start app ===============================================
// startup our app at http://localhost:8080
//app.listen(port);   

// app.get('/', function(req, res){
//     //res.render("./");
//     res.sendFile(path.join(__dirname,'./src/app/login','login.component.html'));
//   });

app.get('/',(req,res) =>{
    res.send("Backend server is up.")
});

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port=8080;
app.listen(app.get('port'), () => {
    console.log("app is listening on port " + (process.env.port || port));
});


server.listen(port);
  


