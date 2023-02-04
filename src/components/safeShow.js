import React,{useState,useEffect} from 'react'
import "./Show.css"
import axios from "axios";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';

import '@fortawesome/fontawesome-free/css/all.min.css';

const moment= require('moment') 
ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const Show = () => {
  const [startDate, setStartDate] = useState("");
  const [allFoodData, setAllFoodData] = useState("");
  const [selectedData,setSelectedData]=useState([]);
  const [endDate,setEndDate]=useState("");
  const[diabetic,setDiabetic]=useState(true);
  const [time,setTime]=useState();
  const [boundry, setBoundry] = useState("");
  const [allGI, setAllGI] = useState({allGI:[],foodValues:[]});
  const newArr=[]
  let big=[]
  let food=[]
  let read_time=[]
 

  const url="http://Localhost:4000/profile/getProfile/shweta"



  useEffect(() => {
    async function getDiabetic(){
      axios({
        method:"get",
        url:url
      }).then(res=>{
      
        setDiabetic(res.data.data[0].user[0].diabetic)
      
        // console.log(res.data.data[0].user[0].diabetic)
        // setDiabetic(profile.diabetic)
        // diabetic ? console.log(diabetic):console.log(diabetic)
      }).catch(err=>{
        console.log(err)
      })
    }
    async function getBoundry() {
      await axios({
        method: 'get',
        url: "http://localhost:4000/profile/getProfile/63cd05739ed95a3b4e8e287e"
      })
        .then(res => {
          var profile = res.data.data[0];
          setBoundry(profile);
          
        })
        .catch(err => console.log(err))
    }
    getBoundry();
    getDiabetic();

    getDiabetic();
  },[])
  
const options = {
  plugins: {
    datalabels: {
      display: false,
      color: "black",
      formatter: Math.round,
      anchor: "end",
      offset: -20,
      align: "start"
    }
  },
  legend: {
    display: false
  }
};

const getDataOnSubmit=()=>{
  axios({
    method: 'get',
    headers: {
      'Content-type': 'application/json',
    },
    url: "http://localhost:4000/food/between"+`/${startDate}/${endDate}`,
  
  })
  .then(res => {
    var allfood = res.data.data[0];
    setAllFoodData(allfood);

    allfood.forEach(ele=>{
      big.push(ele.GI);
      food.push(ele.foodName);
      read_time.push(ele.reading_time)
      
    })

    setAllGI(big);
    setTime(read_time);
    console.log(time)

    for(var i=0;i<allFoodData.length;i++){
          
          setAllGI(allGI.concat(allFoodData[i].GI))
        }

    })
    .catch(err => alert(err))
 
}


const submitHandler = (e) => {
  
  getDataOnSubmit();
  // console.log(startDate);
  // console.log(endDate)
  e.preventDefault();
}


  return (
    <div className="show">

         {/* <DatePicker 
         selected={startDate}
         className="calender"
         dateFormat="yyyy-MM-dd"
         onChange={(date) => setStartDate({date:moment(date).format("yyyy-MM-dd")})} />

        <DatePicker 
         selected={endDate}
         className="calender"
         dateFormat="yyyy-MM-dd"
         onChange={(date) => setEndDate({date:moment(date).format("yyyy-MM-dd")})} /> */}

   <div className="input-output-show">
   <form className="food-inputs-show" onSubmit={submitHandler}>
      <input placeholder="from" className="calender" value={startDate} onChange={(e)=>setStartDate(e.target.value)}></input>
         <input placeholder="to" className="calender" value={endDate} onChange={(e)=>setEndDate(e.target.value)}></input>
         <button className="get-data">get data</button>

      </form> 
      
      <div className="output-show" >
          <Line datasetIdKey="id"
          data={ {
            labels:time,
                datasets: [
              {
                id:1,
                label: "high alert",
                data: diabetic?[200,200,200,200,200,200,200,200,200,200,200,200,200,200,200]:[140, 140, 140, 140, 140, 140, 140,140,140,140,140,140,140,140,140],
                backgroundColor: 'red'
              },
              {
                id:2,
                label: "today's intake",
                data:allGI,
                backgroundColor: 'yellow',
                dataLabels:{display:true}
              }
            ],
          }} plugins={[ChartDataLabels]} options={options}>hello</Line>
      
        </div>
        {/* {console.log(allGI)} */}
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
           selectedData? selectedData.map((a,i) => (
            <div className="single-list" key={i}>
              <h6 >{a.foodName}</h6>
              <h6 >{a.quantity}</h6>
              <h6 >{a.GI}</h6>
              <h6 >{a.reading_time}</h6>

            </div>
          )):"no data found!"
          }
        {console.log(allGI)}
         
        </div>
      </div>

    </div>
  )
}

export default Show