const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");

async function connectToDatabase()
{
    try
    {
        await mongoose.connect("mongodb+srv://Fahad:qq123123@cluster0.peyuckp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        
        console.log("Connected to database!");
    }
    catch(error)
    {
        console.log("Connection failed.");
    }
}



async function createRecipe(newRecipe)
{
    try
    {
        const createdRecipe = await Recipe.create(newRecipe);
        console.log(createdRecipe);
    }
    catch(error)
    {
        console.log("Failed to create recipe.")
    }
}


async function getAllRecipes()
{
    try
    {
        const allRecipes = await Recipe.find();
        allRecipes.forEach(recipe => 
        {
            console.log(`${recipe.name} is an ${recipe.difficulty} recipe and takes ${recipe.prepTime} minutes to prepare`);
        });
    }
    catch(error)
    {
        console.log("Error: could not get all recipes")
    }
}

async function updateRecipe(recipeId, newRecipeData)
{
    try
    {
        const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, newRecipeData, { new:true });
        console.log(updatedRecipe);
    }
    catch(error)
    {
        console.log("Error: could not update recipe")
    }
}

module.exports = { connectToDatabase, createRecipe, getAllRecipes, updateRecipe };

/*
    try
    {

    }
    catch(error)
    {
        console.log("Error: ")
    }

*/