//import logo from './logo.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';
   //import Navbar from './navbar';
//import Backgroundvideo from './backgroundvideo';
function App() {
  return (
   <Router>
      <Routes>
       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    
      </Routes>
    </Router>



  );
}

export default App;
