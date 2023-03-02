

import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import "./Profile.css";
const Profile = () => {

 

    const[profile,setProfile]=useState([]);
    const[name,setName]=useState("")
    const[gender,setGender]=useState("");
    const[age,setAge]=useState(22);
    const[diabetic,setDiabetic]=useState("");
    const[editActive,setEditActive]=useState(false);

  async function getProfile(){
    axios({
      method:"get",
      url:"http://Localhost:4000/profile/getProfile/shweta"
    }).then(res=>{
      setProfile(res.data.data[0].user[0]);
      setDiabetic(res.data.data[0].user[0].diabetic)
      console.log(res.data.data[0].user[0])
      // setDiabetic(profile.diabetic)
      // diabetic ? console.log(diabetic):console.log(diabetic)
    }).catch(err=>{
      console.log(err)
    })
  }
  
  useEffect(()=>{
    getProfile();

  },[])
const updateProfile=()=>{
  
  axios({
    method: 'put',
    headers: {
      'Content-type': 'application/json',
    },
    url: "http://localhost:4000/profile/updateProfile/shweta",
    data: {
    
            age:age,
            gender:gender,
            diabetic:diabetic
    }

  })
    .then(res => {
      console.log(res);
      window.location.reload(false);
      setEditActive(false);
      console.log(name)

    })
    .catch(err => alert(err))

}
  return (
    <div className="Profile">

      
      <h4>my profile</h4>
     {editActive?
     <div className="profile-details">
        <div className='pro-det pro-det-edit'><button className='pro-edit' onClick={()=>{updateProfile()}}>save</button></div>
        <div className="pro-det"> <p className="pro-p p">Name</p><input className="pro-val-save"placeholder={profile.name} value={name} ></input></div>
        <div className="pro-det"> <p className="pro-p p">Age</p> <input className="pro-val-save"placeholder={profile.age} value={age} onChange={(e)=>setAge(e.target.value)}></input></div>
        <div className="pro-det"> <p className="pro-p p">diabetic</p><input className="pro-val-save"placeholder={profile.diabetic} value={diabetic}onChange={(e)=>setDiabetic(e.target.value)}></input></div>
        </div>
     
     : 
     <div className="profile-details">
        <div className='pro-det pro-det-edit'><button className='pro-edit' onClick={()=>setEditActive(true)}>edit</button></div>
        <div className="pro-det"> <p className="pro-p p">Name</p><p className="pro-val p">{profile.name}</p></div>
        <div className="pro-det"> <p className="pro-p p">Age</p> <p className="pro-val p">{profile.age}</p></div>
        <div className="pro-det"> <p className="pro-p p">diabetic</p><p className="pro-val p">{profile.diabetic}</p></div>
     
     
    
      </div>}

    </div>
  )
}

export default Profile