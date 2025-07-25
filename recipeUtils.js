const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");
const dotenv = require("dotenv").config();

async function connectToDatabase()
{
    try
    {
        await mongoose.connect(process.env.stringDB);
        
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
        console.log("Failed to create recipe.");
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
        console.log("Error: could not get all recipes");
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
        console.log("Error: could not update recipe");
    }
}

async function deleteRecipe(recipeId)
{
    try
    {
        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
        console.log("Recipe successfully deleted.");
    }
    catch(error)
    {
        console.log("Error: could not delete recipe");
    }
}

async function getRecipeById(id)
{
    try
    {
        const foundRecipe = await Recipe.findById(id);
        console.log(foundRecipe);
    }
    catch(error)
    {
        console.log("No recipe with this ID exists.")
    }
}

module.exports = { connectToDatabase, createRecipe, getAllRecipes, updateRecipe, deleteRecipe, getRecipeById };