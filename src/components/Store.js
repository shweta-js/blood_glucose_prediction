import React from 'react'
import "./Store.css"
import { useHistory } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faPlusSquare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const Store = () => {
    
  return (
    <div className="store">
    <div className="food-inputs">
    <div>
      <label>Breakfast</label>
      <input placeholder='food'></input>
      <input placeholder='time'></input>
      </div>
      <div>
      <label>Lunch</label>
      <input placeholder='food'></input>
      <input placeholder='time'></input>
      </div>
      <div>
      <label>Dinner</label>
      <input placeholder='food'></input>
      <input placeholder='time'></input>
      </div>
      <FontAwesomeIcon icon={ faPlusSquare }
      className="add"/>
      </div>
    <div className="output">output</div>
    </div>
  )
}

export default Store