
import React, {useState} from 'react';
import saasData from '../data/saasdata.json';
import Tool from './Tool';
import Capsule from './Capsule';
import CapsuleComponent from './CapsuleComponent';
import NavigationButtons from './NavigationButtons';

export default function HomePage() {

    const [capsuleData,setCapsuleData] = useState([
        {"id" : "1", "title" : "Project Management"},
        {"id" : "2", "title" : "Time Management"},
        {"id" : "3", "title" : "Email Marketing"},
        {"id" : "4", "title" : " Flight Booking"},
        {"id" : "5", "title" : "Enterprise Resource Planning"},
        {"id" : "6", "title" : "Customer Relationship Management"}])


    return (
        <div>
            
      <div style={{display: "flex", }}>
            <div  style={{ paddingTop: "20px",  marginLeft: "12%", marginRight: "22%", }}> 
                
                <div style={{ marginTop: "3%", }}>   
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
        
        
          <CapsuleComponent/>

          
         

      </div>

      

      
        
        </div>
    )
}
