// require("../config/db.js");
const Food = require('../models/FoodModel');
// import endOfDay from 'date-fns/endOfDay'
// import startOfDay from 'date-fns/startDay'
var ObjectId = require('mongodb').ObjectID;


const temp = async (req, res) => {
 
    
    res.send("check")

}

const addFood = async(req,res)=>{
    var foodName=req.body.foodName;
    var quantity=req.body.quantity;
    var GI=req.body.GI;
    var reading_time=req.body.reading_time;

    try{
        
        var addFood=new Food({
           foodName,
           quantity,
           GI,
           reading_time
        })
        console.log(addFood)
        var insertFood= await addFood.save();
        res.status(400).json({message:"food added",data:[]});
    }
    catch (e) {
        res.status(400).json({message:"Got Error",data:[]});
        console.log(e);
      }
}

const deleteFood = async(req,res)=>{
    try{
        const {id}=req.params;
        Profile.findByIdAndDelete(id).then((deletedFood) =>
        res.status(200).json({message:"food deleted successfully",data:[{deletedFood}]})
        );
    }catch(err){
        return res.send('could not delete');
    }
  
    
}

const updateFood = async(req,res)=>{
  const {id}=req.params;
  const updateFood= req.body;
  Food.findByIdAndUpdate(
    id,
    updateFood,
    {new:true},
    (error,updatedFood)=>{
        if (error) console.log(error);

        res.status(200).json({
            message:"food updated successfull",data:[{updatedFood}]
        })
    }
  )

}

const getAllFood = async(req,res)=>{
    Food.find({},async(err,foods)=>{
        if(err){
            res.status(400).json({
                message:"No details found",
                data:[]
            })
        }
        else{
            res.status(200).json({
                message:"all food",
                data:[foods]
            })
        }
    }).sort("-createdAt")
    
}

const todayIntake = async(req,res)=>{
    var startOfToday = new Date();
    startOfToday.setHours(0,0,0,0);
    // creates ObjectId() from date:
    var _id = Math.floor(startOfToday.getTime() / 1000).toString(16) + "0000000000000000";
    

    Food.find({ _id: { $gte: ObjectId(_id) } },async(err,foods)=>{
        if(err){
            res.status(400).json({
                message:"No details found",
                data:[]
            })
        }
        else{
            res.status(200).json({
                message:"all food",
                data:[foods]
            })
        }
    })
    
}
const dataForDate= async(req,res)=>{
//    Food.find=async(req,res)=>{
//    createdAt:{
//     $gte:startOfDay(new Date()),
//     $lte:endOfDay(new Date())
//    }
//    }
}
const betweenDate=async(req,res)=>{
    var {fromdate}=req.params;
    var {todate}= req.params;
    console.log(fromdate,todate);
 

    Food.find({createdAt:{$gte:new Date(fromdate),$lt:new Date(todate)}},async(err,foods)=>{
        if(err){
            res.status(400).json({
                message:"No details found",
                data:[]
            })
        }
        else{
            res.status(200).json({
                message:"all food",
                data:[foods]
            })
        }
    }).sort("-createdAt")
}
module.exports={
    temp,
    addFood,
    deleteFood,
    updateFood,
    getAllFood,
    dataForDate,
    todayIntake,
    betweenDate,

    


}