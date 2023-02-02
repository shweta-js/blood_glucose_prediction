const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  foodName: {
    type: String,
    // required: true,
  },
  quantity: {
    type: Number,
    // required: true,
  },
  GI:{
    type:Number,
    // required:true,
  },
  reading_time:{
        type: Number,
        // required: true,
    }
},{ timestamps: true });



const Food = new mongoose.model("Food", FoodSchema);

module.exports = Food;