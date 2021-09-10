import React from 'react';
import { FaCode } from 'react-icons/fa';

export default function Navbar() {
    return (
        <div style={{display: "flex", height: "60px", }}>
            
            

            <div style={{position: "relative", float: "left",}}>
                
                <div style={{display: "flex"}}>
                <FaCode size="50" style={{color: "#0284FE"}}/>
                
                <h3 className="logo-text">Pack of SaaS</h3>

                </div>


                
                
            </div>

            <div style={{position: "relative", float: "right", marginLeft: "auto",}}>
            
                <ul style={{display: "flex", listStyleType: "none", justifyContent: "space-between",
            marginTop: "15px", fontFamily: "Segoe UI"}}>
                    <li>Contact Us</li>
                    <li style={{marginLeft: "20px"}}>Privacy Policy</li>
                    <li style={{marginLeft: "20px"}}>T&C's</li>
                    <li style={{marginLeft: "20px"}}>Search</li>
                    <li style={{marginLeft: "20px"}}>Login</li>
                </ul>
                

            </div>
        </div>
    )
}
