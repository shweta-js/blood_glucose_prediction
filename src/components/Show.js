import React,{useState,useEffect} from 'react'
import "./Show.css"
import axios from "axios";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const moment= require('moment') 

const Show = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [allFoodData, setAllFoodData] = useState([]);
  const [endDate,setEndDate]=useState(new Date());
  useEffect(() => {
    async function getData() {
      await axios({
        method: 'get',
        url: "http://localhost:4000/food/allfood"
      })
        .then(res => {
          var allfood = res.data.data[0];
          setAllFoodData(allfood);
          // console.log(allfood)
          // console.log(res.data.data[0])
     
        })
        .catch(err => console.log(err))
    }
    getData();

},[])
const getDataBetween=()=>{
  // console.log()
}




const submitHandler = () => {

  axios({
    method: 'get',
    headers: {
      'Content-type': 'application/json',
    },
    url: `localhost:4000/food/between?to:${startDate}\:${endDate}`,
  
  })
    .then(res => {
      console.log(res);
      var allfood = res.data.data[0];
          setAllFoodData(allfood);

    })
    .catch(err => alert(err))
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

      <form className="food-inputs" onSubmit={submitHandler}>
      <input placeholder="from"className="calender" onChange={(e)=>setStartDate(e.target.value)}></input>
         <input placeholder="to"className="calender" onChange={(e)=>setEndDate(e.target.value)}></input>
         
         {console.log(startDate)}
         <button className="get-data" onClick={getDataBetween}>get data</button>

      </form>
      
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

export default Show