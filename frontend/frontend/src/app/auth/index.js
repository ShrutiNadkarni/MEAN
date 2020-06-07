var Userinfo=require('../models/userinfo');

//authentication 

var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
    function (email, password, done) {


        Userinfo.findUserbyEmail(email, (err, user) => {

            if (err) {
                return done(err);
                console.log("Invalid email");
            }
            if (!user) {

                return done(null, false, { message: 'Incorrect email.' });

            }

            UserModel.comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {

                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });

                }
            });
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});


passport.deserializeUser(function (id, done) {
    Userinfo.getUserById(id, function (err, user) {
        done(err, user);
    });
});

passport.ensureAuthenticated = (req ,res ,next) => {
    if(req.isAuthenticated()){
        return next();
         res.redirect('/slandingpg');
    } else {
        req.flash("error","Please login first");
        res.redirect('/login');
    }
};



module.exports = passport;
