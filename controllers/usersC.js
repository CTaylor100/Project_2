const express = require('express');         //alternate is const {Router} = require('express');
const router = express.Router();            //alternate is router = Router();      
const User = require('../models/usersM');
const bcrypt = require('bcrypt');
const saltRounds = 10;


//ALL ROUTES ================================================================================
//INDEX ROUTE ===============================================================================
router.get('/signup', (req, res) => {       //this is the equivalent of /users/register path
    res.render('users/SignUp.jsx');         //this is on the same level as pages/Index.jsx
});
router.get('/signin', (req, res) => {       //this is the equivalent of /users/signin path
    res.render('users/SignIn.jsx');
});

//DELETE ROUTE ===============================================================================
router.delete('/signout', (req,res) => {
    // console.log(req.session);
    req.session.destroy(() => {
        res.redirect('/recipes');
    });
});

//CREATE ROUTE ===============================================================================
router.post('/signup', async (req, res) => {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    console.log(req.body);
    await User.create(req.body, (err, newUser) => {
        res.redirect('/users/signin');
    });
});
router.post('/signin', async (req, res) => {
    console.log(req.body);
    await User.findOne({ username: req.body.username }, async (err, user) => {
        console.log(user);
        const passMatch = await bcrypt.compare(req.body.password, user.password);
        if (passMatch) {
            req.session.currentUser = user;     //You can update the redirect route to pass through user 
            req.session.loggedIn = true;        //You can set any type of variable for session (like loggedIn)
            console.log(req.session.loggedIn);
            console.log(user.username)
            res.redirect('/recipes');          //You can redirect to any page you want       
        } else {
            res.send('Password Not Recognized');
        }
    });
});

module.exports = router;