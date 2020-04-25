//Author: Yuri Braga 2017141
//Route to display index with all  dishes
//Importing the DB
const dishModel = require("../model/food.js");
// This function get all dishes and also hide the Modal by sending a variable setted 1 which will change the CSS when validated at the Index.ejs
module.exports = async (req, res) => {
  var myFalse = 1;
  const dishes = await dishModel.find({});
  res.render("index", {
    dishes: dishes,
    myFalse: myFalse,
  });
};
