const dotEnv = require('dotenv').config();

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



// ROuting imports####################################################
const homeController = require("./controller/home.js");

const updateController = require("./controller/update.js");

const dishModel = require("./model/food.js");

var dishCtrl = require("./controller/dish-controller.js");

//When User clicks ADD dish. Express will call the Dish Controller.CreateDish
// app.post("/store", dishCtrl.createDish);

//With app view Engine, express to use EJS as template engine.Each file ending in ejs would be rendered..
app.set("view engine", "ejs");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



//##########creating the route object
app.use(require("./router/routes"));

mongoose.connect(process.env.URL_DB,
  { useNewUrlParser: true }
);

mongoose.connection.on("error", (err) => {
  console.log("Mongo error", err);
  process.exit();
});

app.use(express.static("views"));

app.listen(4001, () => {
  console.log("App listening on port 4001");
});

//Routes for a page##################################
app.get("/update", updateController);

// End point to add a dish to the DB.

app.post("/store", async (req, res) => {
  console.log("Request" + req);
  await dishModel.create(req.body, (error, foods) => {
    res.redirect("/");
  });
});

// To get all the dishes
app.get("/",homeController);

// app.get("/", async (req, res) => {
//   var myFalse = 1;
//   const dishes = await dishModel.find({});
//   res.render("index", {
//     dishes: dishes,
//     myFalse: myFalse,
//   });
//   console.log(dishes);
// });

//to get dish by id
app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  dishModel.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
});

//UPDATE

app
  .route("/put/:id")
  .get((req, res) => {
    var id = req.params.id;
    console.log("1 ---    Numero do meu ID: " + id);

    dishModel.findById(id, (err, dish) => {
      console.log("2- Retorno da minha DB: " + dish);
      var myFalse = 2;

      res.render("index", {
        dishes: dish,
        idTransaction: id,
        myFalse: myFalse,
      });
      console.log("2- Retorno da minha DB: " + dish);
    });
  })
  .post((req, res) => {
    var id = req.params.id;
    console.log("Id do UPDATE :" + id);
    console.log("corpo do update" + req.params);

    dishModel.findByIdAndUpdate(id, req.body, { new: true }, (err) => {
      console.log(req.body);
      if (err) return res.send(500, err);
      return res.redirect("/");
    });
  });
