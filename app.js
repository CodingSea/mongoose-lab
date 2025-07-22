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
    name: "Um Ali",
    ingredients: ["Puff Pastry","Milk"],
    instructions: "bake at 180C",
    prepTime: 120,
    difficulty: "Medium"
}

createRecipe(newRecipe);


/*
try
    {

    }
    catch(error)
    {
        console.log("Error: ")
    }

*/