import React, {useState} from 'react'
import Capsule from './Capsule'
import NavigationButtons from './NavigationButtons'

export default function CapsuleComponent() {

    const [capsuleData,setCapsuleData] = useState([
        {"id" : "1", "title" : "Animals"},
        {"id" : "2", "title" : "Books"},
        {"id" : "3", "title" : "Cryptocurrency"},
        {"id" : "4", "title" : " Documents & Productivity"},
        {"id" : "5", "title" : "Food & Drink"},
        {"id" : "6", "title" : "Government"},
        {"id" : "7", "title" : "Machine Learning"},
        {"id" : "8", "title" : "Personality"},
        {"id" : "9", "title" : "Shopping"},
        {"id" : "10", "title" : "Video"}
    
    ])


    return (
        <div>
             <div style={{ right: 50, 
                position: "absolute", width: "500px", marginTop: "3%", }}>
                <h3>Search More of Your Interests </h3>
          
          
                <div style={{marginTop: "7px"}}>
                {
                    capsuleData.map(cd => {
                    return(
                    <div style={{display: "inline-flex", marginBottom: "7px", marginTop: "7px", marginLeft: "5px"}}>
                    <Capsule data={cd.title}/>
                    </div>
                    )
                    })
                }
                </div>

                

                <p className="see-more">Search More ...</p>
                
                <br/>

                <hr className="hrStyle"/>

                <NavigationButtons/>

         
          
        

        
        
      </div>
        </div>
    )
}
