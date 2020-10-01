//Dependencies
const {Router} = require('express');                        
const router = Router();
const Recipes = require('../models/recipesM');  
const seed = require('../models/seedM');

//ALL ROUTES ================================================================================
//INDEX ROUTE ===============================================================================
router.get('/', (req, res) => { 
    Recipes.find({}, (err, allResults) => {
        console.log(req.session);
        res.render('pages/Index', {
            recipes: allResults, 
            user: req.session.currentUser,
            logged: req.session.loggedIn
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

//NEW ROUTE =================================================================================
router.get('/new', (req, res) => {
    res.render('pages/New.jsx');
});

//DELETE ROUTE ==============================================================================
router.delete('/:id', (req, res) => {
    Recipes.findByIdAndRemove(req.params.id, (err, data) => {  
        // console.log(req.params.id);                              //This is the MongoDB '_id'
        // console.log(data);                                       //This is the full document that is getting removed from the DB
        res.redirect('/recipes');
    });
});

//UPDATE ROUTE ==============================================================================
router.put('/:id', (req, res) => {                                  //This route is called upon submission of edits on the Edit.jsx page
    Recipes.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {     
        // console.log(req.params.id);                              //This is the MongoDB '_id'
        // console.log(req.body);                                   //This is the full document inclusive of edits sent to the DB
        // console.log(data);                                       //This is the full document, if {new: true} is in parameters its the updated data otherwise it's the original data
        res.redirect('/recipes');
    });
});

//CREATE ROUTE ==============================================================================
router.post('/', (req, res) => {   
    console.log(req.body); 
    Recipes.create(req.body, (err, newRecipe) => {
        res.redirect('/recipes');
    });
});


//EDIT ROUTE ================================================================================
router.get('/:id/edit', (req, res) => {                             //This route is called when the 'Edit' button on the Show.jsx page is clicked                       
    Recipes.findById(req.params.id, (err, results) => {            //This will find the one document with matching MongoDB '_id'
        res.render('pages/Edit.jsx', {
            recipe: results                                        //product is the variable that will be used on the Edit.jsx page in {this.props.product}
        });
    });
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
