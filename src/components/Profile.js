

import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import "./Profile.css";
const Profile = () => {

  const url="http://Localhost:4000/profile/getProfile/shweta"

    const[profile,setProfile]=useState([]);
    const[diabetic,setDiabetic]=useState(true)

  async function getProfile(){
    axios({
      method:"get",
      url:url
    }).then(res=>{
      setProfile(res.data.data[0].user[0]);
      setDiabetic(res.data.data[0].user[0].diabetic)
      console.log(res.data.data[0].user[0].diabetic)
      // setDiabetic(profile.diabetic)
      // diabetic ? console.log(diabetic):console.log(diabetic)
    }).catch(err=>{
      console.log(err)
    })
  }
  
  useEffect(()=>{
    getProfile();

  },[])

  return (
    <div className="Profile">

      
      <h4>my profile</h4>
      <div className="profile-details">
        <div className='pro-det pro-det-edit'><button className='pro-edit'>edit</button></div>
        <div className="pro-det"> <p pro-p>Name</p><p >{profile.name}</p></div>
        <div className="pro-det"> <p pro-p>Age</p> <p>{profile.age}</p></div>
        <div className="pro-det"> <p pro-p>diabetic</p><p>{diabetic? "diabetic":"non diabetic"}</p></div>
     
     
    
      </div>

    </div>
  )
}

export default Profile