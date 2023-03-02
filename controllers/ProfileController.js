// require("../config/db.js");
var {mongoose} = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId; 
const Profile = require('../models/ProfileModel');

const temp = async (req, res) => {
 
    
    res.send("check")

}
const createProfile = async(req,res)=>{
    var name=req.body.name;
    var age=req.body.age;
    var gender=req.body.gender;
    var diabetic=req.body.diabetic;

    try{
        
        var addProfile=new Profile({
            name,
            age,
            gender,
            diabetic
        })
        console.log(addProfile)
        var insertProfile = await addProfile.save();
        res.status(400).json({message:"profile created",data:[]});
    }
    catch (e) {
        res.status(400).json({message:"Got Error",data:[]});
        console.log(e);
      }
}
const getProfile = async(req,res)=>{
    
    try{
        const {name}=req.params;
        // console.log(name)
    
      const user=  Profile.find({name:name}).then((user) =>
        res.status(200).json({message:"profile fetched successfully",data:[{user}]})
        );
    }catch(err){
        console.log(err);
        return res.send('could not get');
        
    }
      };

const updateProfile = async(req,res)=>{
  const {name}=req.params;
 
  const updateProfile= req.body;
  Profile.findOneAndUpdate(
    name,
    updateProfile,
    {new:true},
    (error,updatedProfile)=>{
        if (error) console.log(error);

        res.status(200).json({
            message:"Profile updated successfull",data:[{updatedProfile}]
        })
    }
  )
}


const deleteProfile = async(req,res)=>{
    try{
        const {id}=req.params;
        Profile.findByIdAndDelete(id).then((deletedProfile) =>
        res.status(200).json({message:"profile deleted successfully",data:[{deletedProfile}]})
        );
    }catch(err){
        return res.send('could not delete');
    }
  
    
}

module.exports={
    temp,
    createProfile,
    deleteProfile,
    updateProfile,
    getProfile


}