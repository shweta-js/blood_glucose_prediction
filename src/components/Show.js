import React,{useState} from 'react'
import "./Show.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const Show = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="show">
        {/* <DatePicker 
        selected={startDate} 
        onChange={(date:Date) => setStartDate(date)} />
         */}
         <DatePicker 
         selected={startDate}
         className="calender"
         onChange={(date) => setStartDate(date)} />

         <div className="show-data">
          <button className='edit'>edit</button>
              <h4>food</h4>
              <p>Banana cake</p>
              <h4>time</h4>
              <p>12</p>
              <h4>glucose level</h4>
              <p>14.2</p>
         </div>

    </div>
  )
}

export default Show