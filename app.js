const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");
const {createRecipe, getAllRecipes} = require("./recipeUtils");

const newRecipe =
{
    name: "Um Ali 2",
    ingredients: ["Puff Pastry","Milk", "Sugar"],
    instructions: "bake at 180C",
    prepTime: 200,
    difficulty: "Hard"
}

//createRecipe(newRecipe);



getAllRecipes();

/*
try
    {

    }
    catch(error)
    {
        console.log("Error: ")
    }

*/