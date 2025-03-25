//import logo from './logo.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './contact';
import About from './about';
import Login from './login';
import Signup from './signup';
  import Dashboard from './dashboard';
  import TeamRegistration from './TeamRegistration';
  import Teams from './Teams';
  import Player from './player';
  import ViewPlayers from './ViewPlayers';
   //import Navbar from './navbar';
//import Backgroundvideo from './backgroundvideo';
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register-team" element={<TeamRegistration />} />
        <Route path="/teams" element={<Teams />} />
        <Route path='/player' element={<Player />} />
        <Route path='/players' element={<ViewPlayers />} />
      </Routes>
    </Router>



  );
}

export default App;
