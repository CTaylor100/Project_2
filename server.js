//Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3005;  
const recipesRouter = require('./controllers/recipesC');

//Middlewear
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Routes & Routers
app.get('/', (req, res) => { res.send('working project2'); });
app.use('/recipes', recipesRouter);

//App Listener
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });