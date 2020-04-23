const express = require("express");
//Path is a module to help us to get the directory path...
const axios = require("axios");

const app = express();

const path = require("path");

// Constant to receive EJS module ( To install server side)
const ejs = require("ejs");

// Constant to require mongoose to be used and to communicate with the Mongo Server (Install Server Side)

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const logger = require("morgan");

// ROuting imports####################################################
const homeController = require("./controller/home.js");

const dishModel = require("./model/food.js");

var dishCtrl = require("./controller/dish-controller.js");

//When User clicks ADD dish. Express will call the Dish Controller.CreateDish
// app.post("/store", dishCtrl.createDish);

//With app view Engine, express to use EJS as template engine.Each file ending in ejs would be rendered..
app.set("view engine", "ejs");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));

//##########creating the route object
app.use(require("./router/routes"));

mongoose.connect(
  "mongodb+srv://FoodAllergen:pass1234@cluster0-fthuf.mongodb.net/FoodAllergen",
  { useNewUrlParser: true }
);

mongoose.connection.on("error", (err) => {
  console.log("Mongo error", err);
  process.exit();
});

app.use(express.static("public"));

app.listen(3001, () => {
  console.log("App listening on port 3001");
});

//Routes for a page##################################
// app.get("/", homeController);

// End point to add a dish to the DB.

app.post("/store", async (req, res) => {
  console.log("Request" + req);
  await dishModel.create(req.body, (error, foods) => {
    res.redirect("/");
  });
});

// To get all the dishes

app.get("/", async (req, res) => {
  const dishes = await dishModel.find({});
  res.render("index", {
    dishes: dishes,
  });
  console.log(dishes);
  if ((dishes.Gluten = "on")) {
    return "X";
  }
});

//to get dish by id
app.get("/post/:id", async (req, res) => {
  console.log(req.params);
  const dishes = await dishModel.findById(req.params.id);
  res.render("post", {
    dishes: dises,
  });
});
