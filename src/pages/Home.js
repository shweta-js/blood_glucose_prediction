import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import axios from "axios";

const url="localhost://4000/profile/getProfile/63c953db584c466c84e6feb1"

 
const Home = () => {


  const[profile,setProfile]=useState([]);

  async function getProfile(){
    axios({
      method:"get",
      url:url
    }).then(res=>{
      setProfile(res.data.myProfile);
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getProfile();

  },[])



  return (
    <>
    <div className="home">
    <div className='profile'>
       <label>Name</label> <h4>{profile.name}</h4>
       <label>Age</label> <h6>{profile.age}</h6>
        <label>Gender</label> <h6>{profile.gender}</h6>
        {console.log()}
    </div>
        <button className="store-btn"><Link className="link" to="/store">store</Link></button>
        <button className="show-btn"><Link className="link" to="/show">show</Link></button>
    </div>
    </>
  )
}

export default Home