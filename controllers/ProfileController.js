// require("../config/db.js");
const Profile = require('../models/ProfileModel');

const temp = async (req, res) => {
 
    
    res.send("check")

}
const createProfile = async(req,res)=>{
    var name=req.body.name;
    var age=req.body.age;
    var gender=req.body.gender;

    try{
        
        var addProfile=new Profile({
            name,
            age,
            gender
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
        const {profileId}=req.params;

        const myProfile = await Profile.find({profileId});
        if(myProfile){
            res.status(200).json({messange:"profile found",data:[{myProfile}]})
        }else{
            throw new Error("error!")
        }
    }catch(error){
        console.log(error);
        res.status(400).json({message:"got error",data:[]})
    }
};

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

const updateProfile = async(req,res)=>{
  const {id}=req.params;
  const updateProfile= req.body;
  Profile.findByIdAndUpdate(
    id,
    updateProfile,
    {new:true},
    (error,updatedProfile)=>{
        if (error) console.log(error);

        res.status(200).json({
            message:"profile updated successfull",data:[{updatedProfile}]
        })
    }
  )

}
module.exports={
    temp,
    createProfile,
    deleteProfile,
    updateProfile,
    getProfile


}