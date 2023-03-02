import React, { useEffect, useState } from 'react'
import "./Show.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import Select from 'react-select';
import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Link,useNavigate} from 'react-router-dom'

import e from 'cors';

ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)



const Show = () => {




  const [selectedOption, setSelectedOption] = useState("");
  const [todaysList, setTodaysList] = useState([]);
  const [reading_time, setreading_time] = useState("");
  const [quantity, setQuantity] = useState("");
  const [allFoodData, setAllFoodData] = useState([]);
  const [GI, setGI] = useState("");
  const [allGI, setAllGI] = useState({allGI:[],foodValues:[]});
  const [boundry, setBoundry] = useState("");
  const [isLoading,setLoading]=useState(false);
  const [toggle,setToggle]=useState()
  const[diabetic,setDiabetic]=useState(true);
  const [time,setTime]=useState();
  const [startDate,setStartDate]=useState("2-2-2022");
  const [endDate,setEndDate]=useState("2-25-2023");
  const [toggleFood,setToggleFood]=useState(false);

  const newArr=[]
  let big=[]
  let food=[]
  let read_time=[]

  const [objValue, setObjValue] = useState('');
  const [xValue,setXValue] = useState('');
  const [yValue,setYValue]=useState('');


  useEffect(() => {


    //--------------------------------------
    const url="http://Localhost:4000/profile/getProfile/shweta"

  async function getDiabetic(){
    axios({
      method:"get",
      url:url
    }).then(res=>{
    
      setDiabetic(res.data.data[0].user[0].diabetic)
    }).catch(err=>{
      console.log(err)
    })
  }



    // --------------getting boundry line--------

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

  },[])


  const addDetail = (e) => {
    setTodaysList([...todaysList, selectedOption])

  }

  allFoodData.map((a,i)=>{
    newArr.push(a.GI)
  
  })
  // ------------get field---------------------

  function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var result = getFields(allFoodData, "foodName");
// console.log(result) 
//-----------------get field end---------------------------------

  const submitHandler = (e) => {
    console.log(startDate);
    console.log(endDate)
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
          console.log(read_time)
            
        })
    
        setAllGI(big);
        setTime(read_time);
        console.log(allfood)
    
        for(var i=0;i<allFoodData.length;i++){
              
              setAllGI(allGI.concat(allFoodData[i].GI))
            }
    
        })
        .catch(err => alert(err))
        e.preventDefault();
  }



const showGI = {
  labels: allFoodData.map((item) => item.reading_time.slice(0,16)),
  datasets: [
    {
      label: 'GI vs Reading Time',
      data: allFoodData.map((item) => item.GI),
      backgroundColor: 'yellow',
      borderColor: 'blue',
      borderWidth: 1,
    },
  ],
};
const showGIOptions = {
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Reading Time',
        },
      },
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'GI',
        },
      },
    ],
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        const dataIndex = tooltipItem.index;
        const foodName = allFoodData[dataIndex].foodName;
        const GI = data.datasets[tooltipItem.datasetIndex].data[dataIndex];
        return foodName + ': ' + GI;
      },
    },
  },
};


const xValues = allFoodData.map((food) => food.reading_time);
const yValues = allFoodData.map((food) => food.GI);
const labels = allFoodData.map((food) => food.foodName);


const showFood= {
  labels: labels,
  datasets: [
    {
      label: 'GI vs Reading Time',
      data: yValues,
      fill: false,
      backgroundColor: 'yellow',
      borderColor: 'blue',
      borderWidth: 1,
      lineTension: 0.1,
    },
  ],
  options: {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Reading Time',
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'GI',
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index];
          return label + ': ' + tooltipItem.yLabel;
        },
      },
    },
  },
};
const deleteFood=(id)=>{
  axios({
    method: 'delete',
    headers: {
      'Content-type': 'application/json',
    },
    url: `http://localhost:4000/food/deletefood/${id}`,
    data: {
     
    }

  })
    .then(res => {
      console.log(res);
      // window.location.reload(false);

    })
    .catch(err => alert(err))
}
  return (
    <div className="show">
           <h3>Search the intakes</h3>
      <div className="input-output-show">
   
        <form className="food-inputs-show" onSubmit={submitHandler}>


        <input placeholder="from:mm/dd/yy" className="calender" value={startDate} onChange={(e)=>setStartDate(e.target.value)}></input>
         <input placeholder="to:mm/dd/yy" className="calender" value={endDate} onChange={(e)=>setEndDate(e.target.value)}></input>
         <button className="get-data" type="submit">get data</button>

        </form>

        <div className="output-show" >
      
      
{toggleFood? <Line data={showFood} />: <Line data={showGI} options={showGIOptions} />}
<button value={toggleFood} className="toggle-food" onClick={toggleFood?()=>setToggleFood(false):()=>setToggleFood(true)}>{toggleFood?"show GI":"show Food"}</button>

        </div>
          
      </div>
      {
        allGI[allGI.length - 1]>=140?<div className="fade-in-out">high glucose</div>:" "
      }
      <div className="todays-list">

        <div className="food-list-head">
          <h4>food</h4>
          <h4>quantity</h4>
          <h4>GI</h4>
          <h4>reading_time</h4>
        </div>

        <div className='single-list-head' >
          {
          allFoodData?   allFoodData.map((a,i) => (
            <Link className="single-list" key={i} to={`/food/${a._id}`} >
              <h6 >{a.foodName}</h6>
              <h6 >{a.quantity}</h6>
              <h6 >{a.GI}</h6>
              <h6>{a.reading_time.slice(0,16)}</h6>
              <Link className="delete-food" to="/show" onClick={()=>deleteFood(a._id)} >X</Link>
       
            </Link>
          )):"nothing to show"
          }
         
         
        </div>
      </div>
    </div>
  )
}

export default Show