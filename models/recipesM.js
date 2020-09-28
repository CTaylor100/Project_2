const mongoose = require('mongoose');
    
const recipeSchema = new mongoose.Schema ({
    name: { type: String, required: true }, 
    type: { type: String },
    ingredients: { type: Array },
    directions: { type: Array },
    images: { type: Array }
});

const Recipes = mongoose.model('Recipes', recipeSchema);

module.exports = Recipes;
