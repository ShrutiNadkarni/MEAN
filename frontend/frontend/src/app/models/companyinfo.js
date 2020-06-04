const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/company')
    .then(() => console.log('Connected to MongoDB.....'))
    .catch(err => console.error('Could not connect to Mongodb',err))

const companySchema=new mongoose.Schema({
    legalentityname:String,
    legalentitycode:Number,
    fname:String,
    lname:String,
    email:String,
    ccode:Number,
    mobileno:Number,
    addr1:String,
    addr2:String,
    country:String,
    state:String,
    city:String,
    postalcode:Number,
    logo:String
});

const Companyinfo=mongoose.model('Companyinfo',companySchema);

// async function createCompanyinfo() {
//   const companyinfo=new Companyinfo({
//      legalentityname:'TMC Company Name',
//      legalentitycode:367875,
//      fname:'Rita',
//      lname:'Desai',
//      email:'tmccadmin@live.com',
//      ccode:91,
//      mobileno:98878754321,
//      addr1:'ShvajiNagar',
//      addr2:'Pune',
//      country:'India',
//      state:'Maharshtra',
//      city:'Mumbai',
//      postalcode:411029,
//      logo:'ABC'
// });

//    const result=await companyinfo.save();
//    //console.log(result);

// }
//createCompanyinfo();
