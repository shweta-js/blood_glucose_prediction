// import React, { useEffect,useState } from 'react'
// import { Link } from 'react-router-dom'
// import "./Home.css"
// import axios from "axios";

// const url="localhost://4000/profile/getProfile/63c953db584c466c84e6feb1"

 
// const Home = () => {


//   const[profile,setProfile]=useState([]);

//   async function getProfile(){
//     axios({
//       method:"get",
//       url:url
//     }).then(res=>{
//       setProfile(res.data.myProfile);
//       console.log(res)
//     }).catch(err=>{
//       console.log(err)
//     })
//   }
//   useEffect(()=>{
//     getProfile();

//   },[])



//   return (
//     <>
//     <div className="home">
//     <div className='profile'>
//        <label>Name</label> <h4>{profile.name}</h4>
//        <label>Age</label> <h6>{profile.age}</h6>
//         <label>Gender</label> <h6>{profile.gender}</h6>
//         {console.log()}
//     </div>
//         <button className="store-btn"><Link className="link" to="/store">store</Link></button>
//         <button className="show-btn"><Link className="link" to="/show">show</Link></button>
//     </div>
//     </>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import axios from "axios";

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add logic to submit the updated profile information
  }

  return (
    
    <div className="home">
   {/* <div className="fade-in-out">
      WELCOME PLEASE PROVIDE THE FOLLOWING INFORMATION TO BEGIN
   </div> */}


      {/* <div className="profile">

        <label>Name</label>
        <input type="text" className="name-text-box" value={name} onChange={e => setName(e.target.value)} />
        <br />
        <label>Age</label>
        <input type="text" className="age-text-box" value={age} onChange={e => setAge(e.target.value)} />
        <br />
        <label>Gender</label>
        <input type="text" className="gender-text-box" value={gender} onChange={e => setGender(e.target.value)} />
        <br />
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </div> */}
      {/* <button className="store-btn">
        <Link className="link" to="/store">store</Link>
      </button>
      <button className="show-btn">
        <Link className="link" to="/show">show</Link>
      </button> */}
        <div className="fade-in-out">
      WELCOME, KNOW YOUR GLUCOSE LEVEL
   </div>
   <p className="additional-info">
   "Welcome to our meal-based glucose prediction website! Our platform uses <br></br>
   advanced algorithms to predict your glucose levels based on the food you eat.<br></br>
   By tracking your meals and analyzing the nutrients and ingredients"

    </p>
    <footer>
     <div class="footer-logos">
     <a href="https://www.facebook.com/">
      <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="Facebook logo"/>
      </a>
      <a href="https://twitter.com/login?lang=en">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU" alt="Twitter logo"/>
      </a>
      <a href="https://www.instagram.com/">
      <img src="https://e7.pngegg.com/pngimages/623/523/png-clipart-instagram-logo-instagram-facebook-inc-youtube-organization-instagram-purple-logo.png" alt="insta logo"/>
      </a>
      
      </div>
      <p class="footer-copyright">Copyright © 2023 Meal-Based Glucose Prediction</p>
      </footer>

    


    </div>
  );
};

export default Home;