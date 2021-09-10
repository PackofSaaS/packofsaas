
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import poscss from '../css/pos.css';
import { FaCloud, FaHeart, FaEye, FaComment, FaPenAlt, FaCertificate, FaMedal, FaFire } from 'react-icons/fa';

import saasData from '../data/saasdata.json';


export default function Tool(props) {
   
    const [bgStyle, setBgStyle] = useState("card-tool")

    let changeStyle= () => {
        setBgStyle("card-tool-hover") 
    }
    let changeStyle2= () => {
        setBgStyle("card-tool") 
    }

    const {id, title, description, likes, views, comments, updated} = props.data

    console.log("Data in local file is" +JSON.stringify(saasData))

    return (
        <>

        
        
    <Link to={{
        pathname : "/details",
        state : props.data
    }}
    
    style={{textDecoration: "none", cursor: "pointer", }}>
        
        <div 
        className={bgStyle}
        onMouseEnter={changeStyle}
        onMouseLeave = {changeStyle2}
        style={{marginLeft: "25px", marginRight: "25px"}}>
          
            

            {/* Icon */}
            <div className="too-icon" >
            {/* <i class="fas fa-cloud fa-2x"></i> */}
            <FaCloud size="fa-2x"/>

           
            </div>

            {
                title == "Time Management" ? 
                <div>
                <FaFire style={{marginLeft: "190px", position: "absolute", marginTop : "-80px", color: "#e25822"}}/>
                </div>
                    :
                    ""
            }
            

            {/* Title */}
            <div>
                <p className="tool-title">{title}</p>
            </div>

            {/* Description */}
            <div>
                <p className="tool-desc">{description}</p>
            </div>

            {/* Multipl Icons Data Points */}
            {/* Likes, Views, Comments, Last Updated */}

            <div style={{display: "flex", justifyContent: "space-between",
        marginLeft: "20px", marginRight: "20px"}}>
            
            <div className="small-icon">
            <FaHeart className="small-icon-sub"/>
            <label className="small-icon-label">{likes}</label>
            </div>
            
            <div className="small-icon">
            <FaEye className="small-icon-sub"/>
            <label className="small-icon-label">{views}</label>
            </div>
            
            <div className="small-icon">
            <FaComment  className="small-icon-sub"/>
            <label className="small-icon-label">{comments}</label>
            </div>

            <div className="small-icon">
            <FaPenAlt className="small-icon-sub"/>
            <label className="small-icon-label">{updated}</label>
            </div>
            
            
            </div>

            {/* Start */}
            
            <div className="button-style">
            
               <label className="button-label">Let's Go</label> 
            
            </div>
            
            

        </div>

        </Link>
        
        </>
        
    )
}
