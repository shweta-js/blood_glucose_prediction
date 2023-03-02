import React from 'react'
import "./SingleData.css"
import {useState,useEffect,} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios"
import DateTimePicker from 'react-datetime-picker';
const SingleData = () => {




  const [foodName, setFoodName]=useState("");
  const [quantity,setQuantity]=useState("");
  const [GI, setGI]=useState("");
  const [reading_time,setreading_time]=useState("");
  const{ id }=useParams();

  
const [timeActive,setTimeActive]=useState(false)


  useEffect(()=>{
    async function getData(){
      await axios({
        method:'get',
        url: `http://localhost:4000/food/${id}`
      }).then(res=>{
        var food=res.data.data[0].requestedFood;
        setFoodName(food.foodName);
        setQuantity(food.quantity);
        setGI(food.GI);
        setreading_time(food.reading_time);
        
      })
    }
    getData();
  },[id])

  const submitHandler = () => {

    axios({
      method: 'put',
      headers: {
        'Content-type': 'application/json',
      },
      url: `http://localhost:4000/food/${id}`,
      data: {
        foodName: foodName,
        quantity: quantity,
        GI: GI,
        reading_time: reading_time
      }

    })
      .then(res => {
        console.log(res);

      })
      .catch(err => alert(err))
  }

  const updateDetail = (e) => {
   
    setTimeActive(false);
    

  }
  return (
    <div className="singleDataMain">
      {/* <h6>{name}</h6>
      <h6>{quantity}</h6>
      <h6>{GI}</h6>
      <h6>{reading_time}</h6> */}
       <form className="singleDataInputMain" onSubmit={submitHandler}>

          <input className="singleInputs" value={foodName} placeholder="food" onChange={e => setFoodName(e.target.value)} ></input>
          <input className="singleInputs" value={quantity} placeholder='quantity' onChange={e => setQuantity(e.target.value)}></input>
          <input className="singleInputs" value={GI} placeholder="GI" onChange={e => setGI(e.target.value)}></input>
          <p className="singleInputs picker-activate" value={timeActive} onClick={e=>setTimeActive(true)}>reading_time</p>
       {timeActive? 
      
       <DateTimePicker 
          input={false}
          value={reading_time}
          onChange={(date) => setreading_time(date)}
         
        />:""}
      {/* <p>Selected Date: {reading_time ? reading_time.toString() : 'None'}</p> */}

      <button className="add-food " type="submit" onClick={updateDetail}>update</button>
       </form>
  
    </div>
  )
}

export default SingleData