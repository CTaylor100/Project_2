//Dependencies
const {Router} = require('express');                        
const router = Router();
const recipes = require('../models/recipesM');  
const seed = require('../models/seedM');

//Routes
router.get('/', (req, res) => { res.send('working project2 router'); });
router.get('/seed', (req, res) => {
    res.send(seed);
})

module.exports = router;
