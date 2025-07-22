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

connectToDatabase();


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

const newRecipe =
{
    name: "Um Ali 2",
    ingredients: ["Puff Pastry","Milk", "Sugar"],
    instructions: "bake at 180C",
    prepTime: 200,
    difficulty: "Hard"
}

//createRecipe(newRecipe);


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
        console.log("Error: ")
    }
}

getAllRecipes()

/*
try
    {

    }
    catch(error)
    {
        console.log("Error: ")
    }

*/