import React, { useEffect, useState } from 'react'
import "./Store.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import Select from 'react-select';
import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)



const Store = () => {


  // const options = [
  //   { value: 'c1', label: 'Chocolate' },
  //   { value: 's2', label: 'Strawberry' },
  //   { value: 'v3', label: 'Vanilla' },
  // ];


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
 
  const newArr=[]
  let big=[]
  let food=[]
  let read_time=[]

  useEffect(() => {
  

    async function getData() {
      await axios({
        method: 'get',
        url: "http://localhost:4000/food/today"
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
        .catch(err => console.log(err))
    }
    getData();






    //--------------------------------------
    const url="http://Localhost:4000/profile/getProfile/shweta"

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

  const submitHandler = () => {

    axios({
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      url: "http://localhost:4000/food/addfood",
      data: {
        foodName: selectedOption,
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
const showFoodValues=()=>{
  console.log("hello")
 
}


  return (
    <div className="store">
      <div className="input-n-output">
        <form className="food-inputs" onSubmit={submitHandler}>

          {/* <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)} >
            <option value="">Select food</option>
            <option value="food1">food1</option>
            <option value="food2">food2</option>
            <option value="food3">food3</option>
          </select> */}

<input value={selectedOption} placeholder="food" onChange={e => setSelectedOption(e.target.value)} ></input>

          <input value={quantity} placeholder='quantity' onChange={e => setQuantity(e.target.value)}></input>
          <input value={GI} placeholder="GI" onChange={e => setGI(e.target.value)}></input>
          <input value={reading_time} placeholder="reading_time" onChange={e => setreading_time(e.target.value)}></input>

          <button className="add-food" type="submit" onClick={addDetail}>add</button>

        </form>

        <div className="output" >
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
          {/* <button onClick={showFoodValues}>food</button> */}
      </div>
      {
        allGI[allGI.length - 1]>=200?<div className="fade-in-out">high glucose</div>:" "
      }
      <div className="todays-list">

        <div className="food-list-head">
          <h4>food</h4>
          <h4>quantity</h4>
          <h4>GI</h4>
          <h4>reading_time</h4>
        </div>

        <div className='single-list-head'>
          {
            allFoodData.map((a,i) => (
              <div className="single-list" key={i}>
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