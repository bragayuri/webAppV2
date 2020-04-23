const Dish = require("../model/food.js");
const app = require("express");

exports.createDish = async function (req, res) {
  await Dish.create(req.body, (error, foods) => {
    res.redirect("/");
  });
};
//   var newDish = new Dish(req.body);
//   newDish.create(function (err, food) {
//     if (err) {
//       res.status(400).json(food);
//     }

//     res.json(food);
//   });
// };

exports.getDishes = function (req, res) {
  Dish.find({}, function (err, dishes) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(dishes);
  });
};

exports.getDish = function (req, res) {
  Dish.findOne({ _id: req.params.id }, function (err, dish) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(dish);
  });
};

exports.updateDish = function (req, res) {
  Dish.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, dish) {
      if (err) {
        res.status(400).json(err);
      }
      res.json(dish);
    }
  );
};

exports.deleteDish = function (req, res) {
  Dish.findByIdAndRemove(req.params.id, function (err, dish) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(dish);
  });
};
