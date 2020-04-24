const Dish = require("../model/food.js");

module.exports = async (req, res) => {
  const result = await Dish.find({});
  res.render("update", {
    result,
  });
};
