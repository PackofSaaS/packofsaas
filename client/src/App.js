import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';



import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';

import React, {useEffect} from 'react'

function App() {

 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
   
        
        
        
       
        
        

  return (
    <div className="App">
      

      <Router>
      
      <div style={{backgroundImage: "linear-gradient(to right, #D0C3B8 , #C2946E)", 
     
      borderBottom: "3px solid black",
      position: "fixed",
      width: "100%"
      }}>
      <div style={{ marginLeft: "12%", marginRight:"12%",  }}>
        <Navbar/>
      </div>
      </div>

      <div style={{backgroundImage: "linear-gradient(to right, #D0C3B8 , #C2946E)",
       paddingBottom: "70px", paddingTop: "70px",borderBottom: "3px solid black" }}> 
      <div style={{ marginLeft: "12%", marginRight:"12%"}}>
        <IntroSection/>
      </div>
      </div>
      

      {/* Show Home Page only if its root  */}
      <Route exact path="/" component={HomePage} />

      <Route exact path="/details" component={DetailsPage} />
      
      </Router>




    </div>
  );
}

export default App;
