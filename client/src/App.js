import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tool from './components/Tool';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';


function App() {
  return (
    <div className="App">
      

      <Router>
        
      <div style={{border: "1px solid black", marginLeft: "12%", marginRight:"12%",}}>
        <Navbar/>
      </div>
        
      <div style={{border: "1px solid black", marginLeft: "12%", marginRight:"12%"}}>
        <IntroSection/>
      </div>
        
        <div style={{border: "1px solid black", marginLeft: "12%", marginRight:"12%", display: "flex", justifyContent:"space-between"}}>
        <Tool/>
        <Tool/>
        <Tool/>
        <Tool/>
        </div>

        
      
      
      </Router>

    </div>
  );
}

export default App;
