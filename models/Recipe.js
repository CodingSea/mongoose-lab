const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema( 
{
    name:
    {
        type: String,
        required: true
    },
    ingredients: [String],
    instructions: String,
    prepTime: Number,
    difficulty:
    {
        type: String,
        enum: ["Easy", "Medium", "Hard"]
    }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;