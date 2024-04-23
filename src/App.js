// import './App.css';



import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Course from './Components/Course/Course';
import Journey from './Components/Journey/Journey';
import Team from './Components/Team/Team';
import Discover from './Components/Discover/Discover';
import Online from './Components/Online/Online';
import World from './Components/World/World';
import Nextlevel from './Components/Nextlevel/Nextlevel';
import Footer from './Components/Footer/Footer';
import Login from './Components/loginpage/Login';
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Navbar/>}/>

          <Route path='/login' element={ <Login/>}/>
        </Routes>
        </Router>
         
      <Hero/>
      <Course/>
      <Journey/>
      <Team/>
      <Discover/>
      <Online/>
      <World/>
      <Nextlevel/>
      <Footer/>
      
    

            
         
        
     
     
    </div>
  );
}

export default App;
