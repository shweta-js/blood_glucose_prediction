const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender:{
        type: String,
        required: true,
    },
  diabetic:{
    type:String,
    required:true,
  }
},{ timestamps: true });



const Profile = new mongoose.model("Profile", profileSchema);

module.exports = Profile;
