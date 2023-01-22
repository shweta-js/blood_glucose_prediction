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


  const [formInputData, setformInputData] = useState(
    {
    time:'',
    food:'',
    quantity:'',
    gi:''
   }
);

  const [selectedOption,setSelectedOption]=useState("");
  const [todaysList,setTodaysList]=useState([]);
  const [readingTime,setReadingTime]=useState("");
  const [quantity,setQuantity]=useState("");
  const [allFoodData,setAllFoodData]=useState("");
  const [glucose_index,setGlucose_index]=useState("");


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
    setTodaysList([...todaysList,selectedOption]);
    setReadingTime(e.target.value);
    setQuantity(e.target.value);
    console.log(selectedOption)
  }
  const submitHandler=(e)=>{
   console.log("handle submit")

  }
 
  return (
    <div className="store">
    <div className="input-n-output">
    <form className="food-inputs" onSubmit={submitHandler}>

   
     <Select
     defaultValue={selectedOption}
     onChange={setSelectedOption}
     options={options}
     value={selectedOption}
     >
     </Select>
     <input value={quantity} placeholder='quantity' onChange={e=> setQuantity(e.target.value)}></input>
     <input value={glucose_index} placeholder="glucose_index" onChange={e=>setGlucose_index(e.target.value)}></input>
     <input value={readingTime} placeholder="reading time" onChange={e=>setReadingTime(e.target.value)}></input>
     <button className="add-food" onClick={addDetail}>add</button>

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
      {/* {
        allFoodData.map((a)=>(
          <div  className="single-list">
             <h6>{a.foodName}</h6>
             <h6>{a.quantity}</h6>
             <h6>{a.GI}</h6>
             <h6>{a.reading_time}</h6>
          
          </div>
        ))
      } */}
    </div>
    </div>
    </div>
  )
}

export default Store