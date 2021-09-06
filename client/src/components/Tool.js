
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import poscss from '../css/pos.css';
import { FaCloud, FaHeart, FaEye, FaComment, FaPenAlt } from 'react-icons/fa';


export default function Tool() {
   
    const [bgStyle, setBgStyle] = useState("card-tool")

    let changeStyle= () => {
        setBgStyle("card-tool-hover") 
    }
    let changeStyle2= () => {
        setBgStyle("card-tool") 
    }


    return (
        <>

        
        
        
        
        <div 
        className={bgStyle}
        onMouseEnter={changeStyle}
        onMouseLeave = {changeStyle2}>
          
            

            {/* Icon */}
            <div className="too-icon">
            {/* <i class="fas fa-cloud fa-2x"></i> */}
            <FaCloud size="fa-2x"/>
            </div>

            {/* Title */}
            <div>
                <label className="tool-title">Flight Search</label>
            </div>

            {/* Description */}
            <div>
                <p className="tool-desc">Your number 1 choice to search flights around the globe free of cost.</p>
            </div>

            {/* Multipl Icons Data Points */}
            {/* Likes, Views, Comments, Last Updated */}

            <div style={{display: "flex", justifyContent: "space-between",
        marginLeft: "20px", marginRight: "20px"}}>
            
            <div className="small-icon">
            <FaHeart className="small-icon-sub"/>
            <label className="small-icon-label">1.2k</label>
            </div>
            
            <div className="small-icon">
            <FaEye className="small-icon-sub"/>
            <label className="small-icon-label">2.4k</label>
            </div>
            
            <div className="small-icon">
            <FaComment  className="small-icon-sub"/>
            <label className="small-icon-label">10k</label>
            </div>

            <div className="small-icon">
            <FaPenAlt className="small-icon-sub"/>
            <label className="small-icon-label">2h</label>
            </div>
            
            
            </div>

            {/* Start */}
            <Link to="/test" style={{textDecoration: "none", cursor: "pointer"}} >  
            <div className="button-style">
            
               <label className="button-label">Let's Go</label> 
            
            </div>
            </Link>
            

        </div>
        
        </>
        
    )
}
