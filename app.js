const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");
const { connectToDatabase, createRecipe, getAllRecipes, updateRecipe, deleteRecipe, getRecipeById } = require("./recipeUtils");

const newRecipe =
{
    name: "Um Yusuf 26",
    ingredients: ["Milk", "Sugar"],
    instructions: "bake at 80C",
    prepTime: 200,
    difficulty: "Easy"
}


connectToDatabase();

// createRecipe(newRecipe);

//getAllRecipes();

//updateRecipe("687fdfbd9d151446de15ad29", newRecipe);

//deleteRecipe("687fdfbd9d151446de15ad29");

getRecipeById("687fc7936ca78b89403a17f7");