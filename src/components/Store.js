import React,{useState} from 'react'
import "./Store.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import Select from 'react-select';
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';

import "react-datepicker/dist/react-datepicker.css";
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

  const [selectedOption,setSelectedOption]=useState([]);
  const [todaysList,setTodaysList]=useState([]);
  const [selectedTime,setSelectedTime]=useState([]);
  const [quantity,setQuantity]=useState([]);

  const addDetail=(e)=>{
    setTodaysList([...todaysList,selectedOption]);
    setSelectedTime(e.target.value);
    setQuantity(e.target.value);
    console.log(selectedOption)
  }

  return (
    <div className="store">
    <div className="input-n-output">
    <div className="food-inputs">

    <input value={selectedTime} placeholder="time"></input>
     <Select
     defaultValue={selectedOption}
     onChange={setSelectedOption}
     options={options}
     >
     </Select>
     <input value={quantity} placeholder='quantity'></input>
     <input placeholder='gi'></input>
     <button className="add-food" onClick={addDetail}>add</button>

   </div>
     
   <div className="output" >
    <h1>output</h1>

   </div>
  
    </div>
    <div className="todays-list">
   
    <div className="food-list-head">
      <h4>time</h4>
      <h4>food</h4>
      <h4>quantity</h4>
      <h4>GI</h4>
    </div>

    <div className='single-list-head'>
      {
        todaysList.map((a)=>(
          <div  className="single-list">
             <h6>{a.value}</h6>
             <h6>{a.label}</h6>
          
          </div>
        ))
      }
    </div>
    </div>
    </div>
  )
}

export default Store