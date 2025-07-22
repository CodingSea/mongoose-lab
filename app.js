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