const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  Dishes: String,
  Celery: String,
  Gluten: String,
  Crustaceous: String,
  Fish: String,
  Milk: String,
  Lupin: String,
  Moluscus: String,
  Mustard: String,
  Nuts: String,
  SesameSeeds: String,
  Soya: String,
  Eggs: String,
  Peanuts: String,
  SulphurDioxide: String,
});

const FoodModel = mongoose.model("Food", FoodSchema);

module.exports = FoodModel;
