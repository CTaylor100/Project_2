//Dependencies
const {Router} = require('express');                        
const router = Router();
const Recipes = require('../models/recipesM');  
const seed = require('../models/seedM');

//Routes
router.get('/', (req, res) => { res.send('working project2 router'); });
router.get('/seed', (req, res) => {
    Recipes.create(seed, (err, data) => {
        console.log(data); //optional to see what should be in Mongo
        res.redirect('/recipes');
    // res.send(seed);
    })
});

module.exports = router;
