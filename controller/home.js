const dishModel = require("../model/food.js");

module.exports = async (req, res) => {
  var myFalse = 1;
  const dishes = await dishModel.find({});
  res.render("index", {
    dishes: dishes,
    myFalse: myFalse,
  });
  console.log(dishes);
};
