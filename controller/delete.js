const dishModel = require("../model/food.js");


 module.exports = async (req, res) => {
  const id = req.params.id;
  dishModel.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
};
