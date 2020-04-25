const dotEnv = require("dotenv").config();
//Author: Yuri Braga 2017141

//Dot Env to hide the environment variables.


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

// Routing imports####################################################
const homeController = require("./controller/home.js");

// const updateController = require("./controller/update.js");

const deleteController = require("./controller/delete.js");

const addController = require("./controller/post.js");

const dishModel = require("./model/food.js");

//With app view Engine, express to use EJS as template engine.Each file ending in ejs would be rendered..
app.set("view engine", "ejs");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//##########creating the route object
app.use(require("./router/routes"));

//Connection with Atlas Mongo DB instance.

mongoose.connect(process.env.URL_DB, { useNewUrlParser: true });

mongoose.connection.on("error", (err) => {
  console.log("Mongo error", err);
  process.exit();
});

//Static files will be served from the  Views Folder
app.use(express.static("views"));

//Port 4001 for the Server
app.listen( process.env.PORT || 3000, () => {
  console.log("App listening on port 3030");
});

//Routes for CRUD within a page##################################
//Brings up the Index JS
app.get("/", homeController);
// app.get("/update", updateController);
//Sends to Delete a dish
app.get("/delete/:id", deleteController);
//Sends to Add a dish
app.post("/store", addController);

// app.put("/put/:id",updateController);

//UPDATE
// Route to update a dish.
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
