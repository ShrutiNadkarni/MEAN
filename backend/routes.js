const express=require('express');
const router=express.Router();
var Companyinfo=require('./models/companyinfo');
var Userinfo=require('./models/userinfo');
const checkAuth=require('./middleware/check-auth');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const auth = require('./auth');



//Route for login page 
router.post('/login',(req,res)=>{
  var email=req.body.email;
  var password=req.body.password;

  //Find one object based on email and password
  Userinfo.find({email:email,password:password},function(err,user){
      if (err){
          console.log(err);
          return res.status(500).send();
      }
      if (!user){
        return res.status(404).send();
      }
      if (user){
        res.redirect('/slandingpg');
      }
  });
});     



// router.post('/login',
//     auth.authenticate('local', { successRedirect: '/slandingpg', failureRedirect: '/login', failureFlash: true }),
//     (req, res) => {
//         res.redirect('/slandingpg');
//     });

router.get("/slandingpg",checkAuth,(req,res,next)=> {
  Companyinfo.find()
  .exec()
  .then(docs => {
      const response ={
          companyinfo:docs.map(doc =>{
              return {
                  _id:doc._id,
                  legalentityname:doc.legalentityname,
                  legalentitycode:doc.legalentitycode,
                  fname:doc.fname,
                  lname:doc.lname,
                  email:doc.email,
                  ccode:doc.ccode,
                  mobileno:doc.mobileno,
                  addr1:doc.addr1,
                  addr2:doc.addr2,
                  country:doc.country,
                  state:doc.state,
                  city:doc.city,
                  postalcode:doc.postalcode,
                  logo:doc.logo,
                 
                };
          })
      };
      res.status(200).json(response);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
          error:err       
      });
  });
});

router.get("/companyinfo",checkAuth,(req,res,next)=> {
  Companyinfo.find()
  .exec()
  .then(docs => {
      const response ={
          companyinfo:docs.map(doc =>{
              return {
                  _id:doc._id,
                  legalentityname:doc.legalentityname,
                  legalentitycode:doc.legalentitycode,
                  fname:doc.fname,
                  lname:doc.lname,
                  email:doc.email,
                  ccode:doc.ccode,
                  mobileno:doc.mobileno,
                  addr1:doc.addr1,
                  addr2:doc.addr2,
                  country:doc.country,
                  state:doc.state,
                  city:doc.city,
                  postalcode:doc.postalcode,
                  logo:doc.logo,
                 
                };
          })
      };
      res.status(200).json({
          message:""
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
          error:err       
      });
  });
});



