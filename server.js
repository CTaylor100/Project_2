//Dependencies
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config();


//Shortcuts and Links to other Files
const app = express();
const PORT = process.env.PORT || 3005;  
const recipesRouter = require('./controllers/recipesC');
const usersRouter = require('./controllers/usersC');

//Global Configuration & Connection
const mongoURI = process.env.MONGO + process.env.DB;            
mongoose.connect((mongoURI), { useNewUrlParser: true, useUnifiedTopology: true});      

//Middlewear
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true })); //READ DATA SENT FROM FORMS
app.use(methodOverride("_method"));
app.use(session({
    secret: process.env.SECRET,  //Random string that should not be anywhere public
    resave: false,
    saveUninitialized: false
}));



//Routes & Routers
app.get('/', (req, res) => { 
    // res.send('working foodie site');
    res.redirect('/recipes');
});
app.use('/recipes', recipesRouter);
app.use('/users', usersRouter);

//App Listener
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });