 const Dish = require("../model/food")

 exports.createDish = function(req, res) { 
    var newDish = new Dish(req.body);
    newDish.save(function (err, dish) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(dish); 
});
};

exports.getDishes = function(req, res) {
  Dish.find({}, function (err, dishes) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(dishes);
  }); 
};

exports.getDish = function(req, res) {
  Dish.findOne({_id: req.params.id}, function (err, dish) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(dish);
  }); 
};

exports.updateDish = function(req, res) {
  Dish.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, dish) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(dish);
  }); 
};

exports.deleteDish = function(req, res) {
  Dish.findByIdAndRemove(req.params.id, function (err, dish) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(dish);
  }); 
};