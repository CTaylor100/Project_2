//Dependencies
const {Router} = require('express');                        
const router = Router();
const Recipes = require('../models/recipesM');  
const seed = require('../models/seedM');

//ALL ROUTES ================================================================================
//INDEX ROUTE ===============================================================================
router.get('/', (req, res) => { 
    Recipes.find({}, (err, allResults) => {
        res.render('pages/Index', {
            recipes: allResults
        });
    });
    // res.render('pages/Home');
    // res.send('working project2 router'); 
});

router.get('/seed', (req, res) => {
    Recipes.create(seed, (err, data) => {
        console.log(data); //optional to see what should be in Mongo
        res.redirect('/recipes');
    // res.send(seed);
    })
});

//SHOW ROUTE ================================================================================
router.get('/:id', (req, res) => {                                  //This route is called when a product image is clicked on the Index.jsx page
    Recipes.findById(req.params.id, (err, results) => { 
        console.log(req.params.id);
        console.log(results);
        console.log(1);
        res.render('pages/Show.jsx', {
            recipe: results  
        });
    });
});


module.exports = router;
