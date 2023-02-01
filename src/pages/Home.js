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
   <div className="fade-in-out">
      WELCOME PLEASE PROVIDE THE FOLLOWING INFORMATION TO BEGIN
   </div>


      <div className="profile">

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
      </div>
      <button className="store-btn">
        <Link className="link" to="/store">store</Link>
      </button>
      <button className="show-btn">
        <Link className="link" to="/show">show</Link>
      </button>
    </div>
  );
};

export default Home;
