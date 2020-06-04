const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/company')
    .then(() => console.log('Connected to MongoDB.....'))
    .catch(err => console.error('Could not connect to Mongodb',err))

const userSchema=new mongoose.Schema({
    fname:String,
    email:String,
    password:String
});

const Userinfo=mongoose.model('Userinfo',userSchema);

// async function createUserinfo(){
//     const userinfo=new Userinfo({
//         fname:'Rita',
//         email:'abcadmin@live.com',
//         password:'admin2'
// });

// const result=await userinfo.save();
// //console.log(result);

//}
//createUserinfo();

