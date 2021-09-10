import React from 'react';
import {Link} from 'react-router-dom';

export default function NavigationButtons() {
    return (
        <div style={{display: "flex", justifyContent: "space-around", marginTop: "2%"}}>
            <Link 
            style={{textDecoration: "none",}}
            className="nav-btns-style"
            to="/help">Help</Link>

            <Link 
            style={{textDecoration: "none"}}
            className="nav-btns-style"
            to="/careers">Careers</Link>


            <Link 
            style={{textDecoration: "none"}}
            className="nav-btns-style"
            to="/privacy">Privacy</Link>

            <Link 
            style={{textDecoration: "none"}}
            className="nav-btns-style"
            to="/contact">Contact</Link>

            <Link 
            style={{textDecoration: "none"}}
            className="nav-btns-style"
            to="/tncs">T&Cs</Link>

            <Link 
            style={{textDecoration: "none"}}
            className="nav-btns-style"
            to="/about">About</Link>


             
        </div>
    )
}
