import React,{useState} from 'react'
import "./Store.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Line} from 'react-chartjs-2'
import {TimePicker} from 'react-ios-time-picker';
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';

ChartJS.register(
  Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement
)
const Store_withgraph = () => {
const [value,setValue]=useState('')
const [time, setTime] = useState('10:00');

const [food, setFood] = useState([]);

    const addEntryClick = () => {
        setFood(oldArray => [...oldArray, `Entry ${oldArray[0]}`]);
        console.log(food);
    };

const [data,setData]=useState({
  labels:["1","2","3","4","5","6","7","8"],
  datasets:[
    {
      label:"high alert",
      data:[140,140,140,140,140,140,140],
      backgroundColor:'red'
    },
    {
      label:"today's intake",
      data:food,
      backgroundColor:'yellow'
    }
  ]
})

  const setFoodValue=(e)=>{
    setFood(e.target.value);
  }
    
  return (

    
    <div className="store">
    <div className="food-inputs">
     
      <select name="select food" value={food} onChange={setFoodValue}>
        <option value="">select food</option>
        <option value="47">Banana cake, made with sugar</option>
        <option value="55">Banana cake, made without sugar</option>
        <option value="46">Sponge cake, plain</option>
      </select>
      <select>
        <option value="">select time</option>
        <option value="12">12:00</option>
        <option value="1">1:00</option>
        <option value="2">2:00</option>
        <option value="3">3:00</option>
        <option value="4">4:00</option>
        <option value="5">5:00</option>
        <option value="6">6:00</option>
        <option value="7">7:00</option>
      </select>
      {/* <TimePicker className="timepicker"onChange={setTime} value={time}/> */}
      <button className="add-food" onClick={addEntryClick}>add</button>

    </div>
      
    <div className="output" >
    <Line data={data}>hello</Line>


    </div>
    </div>
  )
}

export default Store_withgraph