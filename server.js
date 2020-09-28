//Dependencies
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
require('dotenv').config();

//Shortcuts and Links to other Files
const app = express();
const PORT = process.env.PORT || 3005;  
const recipesRouter = require('./controllers/recipesC');

//Global Configuration & Connection
const mongoURI = process.env.MONGO + process.env.DB;            
mongoose.connect((mongoURI), { useNewUrlParser: true, useUnifiedTopology: true});      

//Middlewear
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true })); //READ DATA SENT FROM FORMS
app.use(methodOverride("_method"));


//Routes & Routers
app.get('/', (req, res) => { res.send('working project2'); });
app.use('/recipes', recipesRouter);

//App Listener
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });