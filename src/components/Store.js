import React,{useEffect, useState} from 'react'
import "./Store.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import Select from 'react-select';
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
ChartJS.register(
  Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement
)


const Store = () => {

 
  const options= [
    { value: 'c1', label: 'Chocolate' },
    { value: 's2', label: 'Strawberry' },
    { value: 'v3', label: 'Vanilla' },
  ];


  

  const [selectedOption,setSelectedOption]=useState("");
  const [todaysList,setTodaysList]=useState([]);
  const [reading_time,setreading_time]=useState("");
  const [quantity,setQuantity]=useState("");
  const [allFoodData,setAllFoodData]=useState([]);
  const [GI,setGI]=useState("");


//   const [formInputData, setformInputData] = useState(
//     {
//     foodName:selectedOption,
//     quantity:quantity,
//     GI:GI,
//     reading_time:reading_time
//    }
// );

  useEffect(()=>{


    async function getData(){
     await axios({
      method:'get',
      url:"http://localhost:4000/food/allfood"
     })
     .then(res=>{
      var allfood = res.data.data[0];
      console.log(allfood);
      setAllFoodData(allfood);
      
     })
     .catch(err=>console.log(err))
    }
    getData();

  },[])

  const addDetail=(e)=>{
    setTodaysList([...todaysList,selectedOption])
    
    console.log(reading_time)
  }

  const submitHandler=()=>{
    
 axios({
        method:'post',
        headers:{
          'Content-type':'application/json',
        },
        url:"http://localhost:4000/food/addfood",
        data:{
          foodName:selectedOption,
          quantity:quantity,
          GI:GI,
          reading_time:reading_time
        }
  
      })
      .then(res=>{
        console.log(res);
       
      })
      .catch(err=>alert(err))
    }
   
  
 
  return (
    <div className="store">
    <div className="input-n-output">
    <form className="food-inputs" onSubmit={submitHandler}>

   
     {/* <Select
     defaultValue={selectedOption}
     onChange={setSelectedOption}
     options={options}
     value={selectedOption}
     /> */}

<select value={selectedOption} onChange={e=>setSelectedOption(e.target.value)} >
  <option value="">Select food</option>
  <option value="food1">food1</option>
  <option value="food2">food2</option>
  <option value="food3">food3</option>
  </select>
   
     <input value={quantity} placeholder='quantity' onChange={e=> setQuantity(e.target.value)}></input>
     <input value={GI} placeholder="GI" onChange={e=>setGI(e.target.value)}></input>
     <input value={reading_time} placeholder="reading_time" onChange={e=>setreading_time(e.target.value)}></input>
   
     <button className="add-food" type="submit" onClick={addDetail}>add</button>

   </form>
     
   <div className="output" >
    <h1>output</h1>

   </div>
  
    </div>
    <div className="todays-list">
   
    <div className="food-list-head">
      <h4>food</h4>
      <h4>quantity</h4>
      <h4>GI</h4>
      <h4>reading_time</h4>
    </div>

    <div className='single-list-head'>
      {
        allFoodData.map((a,i)=>(
          <div  className="single-list">
             <h6 >{a.foodName}</h6>
             <h6 >{a.quantity}</h6>
             <h6 >{a.GI}</h6>
             <h6 >{a.reading_time}</h6>
          
          </div>
        ))
      }
    </div>
    </div>
    </div>
  )
}

export default Store