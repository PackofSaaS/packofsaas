import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tool from './components/Tool';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import saasData from '../src/data/saasdata.json';


function App() {
  return (
    <div className="App">
      

      <Router>
      
      <div style={{backgroundImage: "linear-gradient(to right, #D0C3B8 , #C2946E)", 
      opacity: "0.7",
      borderBottom: "3px solid black"}}>
      <div style={{ marginLeft: "12%", marginRight:"12%",}}>
        <Navbar/>
      </div>
      </div>

      <div style={{backgroundImage: "linear-gradient(to right, #D0C3B8 , #C2946E)",
       paddingBottom: "50px", paddingTop: "10px",borderBottom: "3px solid black" }}> 
      <div style={{ marginLeft: "12%", marginRight:"12%"}}>
        <IntroSection/>
      </div>
      </div>
      
      <div  style={{ marginTop: "-55px", paddingTop: "20px", }}> 
      <div style={{ marginLeft: "12%", marginRight:"12%", marginTop: "3%",}}>   
      {
        saasData.map(sd => {
          return (
            <div style={{display : "inline-flex",}}><
              Tool data={sd}/></div>
          )
        })
      }
      </div>
      </div>
        
      
      
      </Router>

    </div>
  );
}

export default App;
