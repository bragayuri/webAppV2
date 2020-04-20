const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  dishName: String,
  hasGluten: Boolean,
  hasCelery: Boolean,
  hasCrustaceous: Boolean,
  hasEggs: Boolean,
  hasFish: Boolean,
  hasNuts: Boolean,
  hasSesame: Boolean,
  hasSoya: Boolean,
  hasSulphur: Boolean,
  hasLupin: Boolean,
  hasNuts: Boolean,
  hasPeanuts: Boolean,
  hasMilk: Boolean,


  
  
});



const FoodModel = mongoose.model("Food", FoodSchema);



module.exports = FoodModel;