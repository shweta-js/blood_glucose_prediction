import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <>
    <div className="home">
     
        <button className="store-btn"><Link className="link" to="/store">store</Link></button>
        <button className="show-btn"><Link className="link" to="/show">show</Link></button>
    </div>
    </>
  )
}

export default Home