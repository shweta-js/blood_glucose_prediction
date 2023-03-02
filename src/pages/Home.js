

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import axios from "axios";
import Footer from "../components/Footer"
import a from "../img/a.png"
import b from "../img/b.png"
import c from "../img/c.png"
import d from "../img/d.png"
const url = "localhost://4000/profile/getProfile/63c953db584c466c84e6feb1"

 
const Home = () => {
  const [profile, setProfile] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  async function getProfile(){
    axios({
      method: "get",
      url: url
    }).then(res => {
      setProfile(res.data.myProfile);
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getProfile();
  }, []);



  return (
    
    <div className="home">
  
     <div className='home-img'>
     {/* <p>WELCOME TO OUR MEAL BASED GLUCOSE TRACKING SYSTEM</p> */}
     <br></br>
   <h1>Welcome, to our meal based <br></br> glucose tracking system</h1>
   
     </div>
     <div className='home-band'>
     <p>Our glucose tracking system puts you in the driver's seat of your health</p>
     
     <Link to="/store" className='try-btn'><h5> Try it out today !</h5></Link> 
     </div>

     <div className='card-main'>
      <a className='card'href="https://drmohans.com/blog/">
        <img src={d}></img>

        <p>It’s the most underrated of foods. It doesn’t give you taste, 
          tang or thrill. It doesn’t give you energy or help you beat fatigue. 
      <br></br> read more... </p>
     
      </a>
      <a className='card'href="https://drmohans.com/blog/">
        <img src={b}></img>
        
        <p>    Yes, type 2 diabetes can be prevented with thoughtful lifestyle changes and plant-rich 
          diets While there is not much you  <br></br> read more... </p>
    
      </a>
      <a className='card'href="https://drmohans.com/blog/">
        <img src={c}></img>
        
        <p>Diabetes is slow, silent and stealthy. It can come on progressively and affect almost every part of your body. 
        <br></br> read more... </p>
       
      </a>

     </div>

     <div className='footer'>
          <div className="social-links">
        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="copywrite">© 2023 All rights reserved.</div>
    </div>


    </div>
  );
};

export default Home;