import React, {useState} from 'react';
import axios from 'axios';

import rightimage from '../images/rightimage.png';

import {FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaSnapchat, FaSlack, FaDiscord, 
FaLinkedin, FaTelegram}  from 'react-icons/fa';

export default function IntroSection() {

    const [email, setEmail] = useState("");

    const handleInputChange= (email) =>{
        setEmail(email);
        console.log(""+email)
    }

    const handleSubmit = () => {
        console.log("Submit pressed")

        const obj = {
            name : "tom",
            email : email
        }

        console.log("Object posted is " + JSON.stringify(obj)) 

        axios.post('https://packofsaas.herokuapp.com/email', obj)
        .then(response => {
          console.log(response.data)
        })
        .catch(function (error){
            console.log(error);
        })

       
    
    }


    return (
        <div style={{display: "flex", marginTop: "0px", marginBottom: "20px",}}>
            

            <div style={{width: "55%"}}>
            
            <p className="introtext">This is a place to use free <b>Software as a Service.</b></p>
            
            <p className="introtextsub">It's easy and free to post your SaaS or article on it and connect with billions of others.</p>
            </div>

            <div style={{ right: "12%", position: "absolute"}}>
            
            <div style={{float: "right"}}>
                <FaTwitter style={{color: "#00aced"}} size="30"/>
                <FaFacebook style={{color: "#3b5998"}} size="30"/>
                <FaInstagram size="30"/>
                <FaYoutube style={{color : "#bb0000"}} size="30"/>
                <FaSnapchat size="30"/>
                <FaSlack size="30"/>
                <FaDiscord size="30"/>
                <FaLinkedin size="30"/>
                <FaTelegram size="30"/>
            </div>

                <br/>
                <br/>

            <div style={{position: "absolute", float: "right"}}>
              
                    <input type="email"
                    className="inputtext"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => handleInputChange(e.target.value)}/>

                    <button 
                    className="btn-large"
                    onClick={handleSubmit}>Submit</button>
               
                <br/>

                <h1 style={{textAlign: "center"}}>219 members</h1>
                
            </div>

            {/* <img src={rightimage}
            height="200px"
            /> */}

            </div>
        </div>
    )
}
