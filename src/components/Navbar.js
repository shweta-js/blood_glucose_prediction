import React, { useEffect, useState } from 'react'
import "./Navbar.css"

import { Link } from 'react-router-dom'

import axios from "axios";
const Navbar = () => {
  return (
    <div className="navbar">
    <h1 className="heading">Glucose Tracker</h1>
    <div className="nav-options">
    <Link className="link" to="/profile">profile</Link>
    <Link className="link" to="/store">store</Link>
    <Link className="link" to="/show">show</Link>
   </div>
      </div>
  )
}

export default Navbar