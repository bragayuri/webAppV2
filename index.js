const express = require('express')
//Path is a module to help us to get the directory path...
const axios = require('axios');

const app =  express();

const path= require('path');

// Constant to receive EJS module ( To install server side)
const ejs = require('ejs');

// Constant to require mongoose to be used and to communicate with the Mongo Server (Install Server Side)

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

// const Foods = require("./model/food.js");

// ROuting imports####################################################
const homeController = require("./controller/home.js")
// const dishController = require("./controller/dish.js")

// router = express.Router();
//CRUD with Express########################################

// router.post('/food', homeController.createDish);

// app.post('/post/:id',async (req, res)=> {
//     const dish = await Foods.findById(req.params.id)
//     res.render('food',{
//         dish
//     })
// })

// app.get('/food', homeController.getDish);
// app.get('/food/:id', homeController.getDish);
// app.delete('/food/:id', homeController.deleteDish);
// app.put('/food/:id', homeController.updateDish);





//With app view Engine, express to use EJS as template engine.Each file ending in ejs would be rendered..
app.set('view engine', 'ejs');

//Importing User model
// const FoodSchema = require("./models/FoodModel.js");


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));

mongoose.connect(
  "mongodb+srv://FoodAllergen:pass1234@cluster0-fthuf.mongodb.net/test",
  { useNewUrlParser: true }
);

mongoose.connection.on('error',(err) => {
    console.log('Mongo error', err);
    process.exit();
})



app.use(express.static("public"));

app.listen(3001, ()=> {
    console.log("App listening on port 3001");
});


//Routes for a page##################################
app.get('/', homeController);



// const server = http.createServer((req, res) => {
//   console.log(req.url);
  
// });

// server.listen(3000);