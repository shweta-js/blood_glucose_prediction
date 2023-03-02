import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Show from "./components/Show"
import Store from "./components/Store"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
// import SingleValue from 'react-select/dist/declarations/src/components/SingleValue';
import SingleData from "./components/SingleData"
function App() {
  return (
  
     <div className="App">
     <Router>
     <Navbar/>
  
     <Routes>

      <Route  path="/" element={<Home/>} />
      <Route path="/show" element={<Show/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/food/:id" element={<SingleData/>}/>
    

     
     </Routes>

     </Router>
      
 
    </div>
  );
}

export default App;
