const mongoose = require('mongoose')

//importing my table

const Dish = require('./model/food')

//connecting to the DB
mongoose.connect("mongodb+srv://FoodAllergen:pass1234@cluster0-fthuf.mongodb.net/FoodAllergen" , {useUnifiedTopology: true});

//Creating a new Object .

// Dish.create(
//     {
//   dishName: 'Apple Pie',
  
//   hasGluten: 'true',
//   hasCelery: 'true',
//   hasCrustaceous: 'false',
//   hasEggs: 'true',
//   hasFish: 'false',
//   hasNuts: 'false',
//   hasSesame: 'true',
//   hasSoya: 'false',
//   hasSulphur: 'true',
//   hasLupin: 'false',
//   hasNuts: 'true',
//   hasPeanuts: 'false',
//   hasMilk: 'true',

//     },
//     (error,Food)=>{
//         console.log(error,Food)

//     }

// )
//Display all. Pass an empty document as the query filter parameter to the first argument of the find method.
Dish.find({},(error, foods) =>{
    console.log(error,foods)
})

//Update
//we use findByID where we provide id as the first parameter
var id="5e9e0d9db3ad3fa131c4016c";

Dish.findByIdAndUpdate(id,{
    dishName:''}, (error, foods) =>{
        console.log(error,foods)

    }
)