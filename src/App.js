import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Show from "./components/Show"
import Store from "./components/Store"
function App() {
  return (
  
     <div className="App">
     <Router>
     <Navbar/>
  
     <Routes>

      <Route  path="/" element={<Home/>} />
      <Route path="/show" element={<Show/>}/>
      <Route path="/store" element={<Store/>}/>
    

     
     </Routes>
 
     </Router>
      
 
    </div>
  );
}

export default App;
