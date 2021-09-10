import React, {useState, useEffect,} from 'react';
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaSnapchat, FaSlack, FaDiscord, 
    FaLinkedin, FaTelegram, FaCopy, FaBookmark, FaMagento, FaBook, FaSpinner}  from 'react-icons/fa';
    import {
        
        useLocation
      } from "react-router-dom";
import TimeManagement from './TimeManagement';

export default function DetailsPage(props) {

    const [toolStyle, setToolStyle] = useState("toolStyle");

    const location = useLocation()


    const {id, title, description, likes, views, comments, updated, author, time} = location.state



    const changeStyle = () => {
        setToolStyle("toolStyleHover")
    }

    const changeStyle2 = () => {
        setToolStyle("toolStyle")
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        console.log("***Data Received from Card ****" +title)

        
      }, [])


    return (
        <div >
            


            <div  style={{ paddingTop: "10px",  marginLeft: "12%", marginRight: "22%", marginTop: "1%"}}> 

            <h1 className="heading-style">{title}</h1>
            <p className="sub-heading-style"> {description}.</p>

            <div 
            className="sub-heading-style-2"
            style={{display:"flex"}}>
                {author}. {time} minute required.  <FaTwitter/> <FaFacebook/> <FaLinkedin/> <FaCopy/> <FaBookmark/>
            </div>

            </div>

            {/* <div  
            className={toolStyle}
            onMouseEnter = {changeStyle}
            onMouseLeave = {changeStyle2}
            style={{ paddingTop: "20px",  marginLeft: "12%", marginRight: "22%", marginTop: "1%", border: "2px dashed  #C2946E", height: "250px", }}
            >  */}

            <div className="rainbow"
           >

            
            <div style={{marginLeft: "45%", marginRight: "35%", marginTop: "2%", textAlign: "center"}}>
            {
                title == "Time Management" ? <TimeManagement/> :  
                <>
                <FaSpinner size="130"/>
                <h1>Coming Soon...</h1>
                </>
            } 
            
            
           
            </div>

            </div>

            <div  
            style={{ paddingTop: "20px",  marginLeft: "12%", marginRight: "22%", marginTop: "1%", }}> 
            <h1>Description</h1>
            
            <h2>What is it?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            
            <h2>Is it free to use?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            
            <h2>Why is it important?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            
            <h2>How to use it?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            </div>

            <div  style={{ paddingTop: "20px",  marginLeft: "12%", marginRight: "22%", marginTop: "1%", borderTop: "3px solid #C2946E"}}> 

            <h2>FAQs</h2>
            
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            
            </div>


            <div  style={{ paddingTop: "20px",  marginLeft: "12%", marginRight: "22%", marginTop: "1%", borderTop: "3px solid #C2946E"}}> 

            <h2>Comments</h2>
            

            </div>


            

        </div>
    )
}
