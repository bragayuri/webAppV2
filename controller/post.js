 const dishModel = require("../model/food.js");

 
 module.exports= async (req, res) => {
  console.log("Request" + req);
   dishModel.create(req.body, (error, foods) => {
    res.redirect("/");
  });
};

