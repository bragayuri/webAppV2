const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  dishName: String,
  dishAllergen: String,
  dishPicture: String,
  
});

FoodSchema.pre("save", function (next) {
    const food = this;

})

const FoodModel = mongoose.model("Food", FoodSchema);



module.exports = FoodModel;