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

    </div>
  )
}

export default Show