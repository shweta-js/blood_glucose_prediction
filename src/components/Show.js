import React,{useState} from 'react'
import "./Show.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const Show = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [food, setFood] = useState('');
  const [quantity, setQuantity] = useState('');
  const [glucoseIndex, setGlucoseIndex] = useState('');
  const [timings, setTimings] = useState('');

  return (
    <div className="show">
         <p className="choose-date-text">Choose date: </p>
         <DatePicker 
         selected={startDate}
         className="calender"
         onChange={(date) => setStartDate(date)} />
         <p className="show-date"></p>
         <div className="input-fields">
            <label>Food:</label>
            <input type="text" value={food} onChange={(e) => setFood(e.target.value)} />

            <label>Quantity:</label>
            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

            <label>Glucose Index:</label>
            <input type="text" value={glucoseIndex} onChange={(e) => setGlucoseIndex(e.target.value)} />

            <label>Timings:</label>
            <input type="text" value={timings} onChange={(e) => setTimings(e.target.value)} />
         </div>
         <div className="edit-cancel-btns">
            <button className='edit'>edit</button>
            <button className='cancel'>cancel</button>
         </div>
         <button className="save-button">Save</button>
         <div className="footer">
         <p>Know your glucose levels</p>
         </div>

    </div>
    
  )
}

export default Show
