//Author: Yuri Braga 2017141
//Route to add a dish
//Importing the DB
const dishModel = require("../model/food.js");

//Function to create a new Dish
module.exports = async (req, res) => {
  dishModel.create(req.body, (error, foods) => {
    res.redirect("/");
  });
};
