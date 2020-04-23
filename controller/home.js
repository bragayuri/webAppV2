const Dish = require("../model/food.js");

module.exports = async (req, res) => {
  const homepage = await Dish.find({});
  res.render("index", {
    homepage,
  });
};
