import React from 'react';
import logo from '../image/logo.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import './NavBar.css'
const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="logo">
              <img src ={logo}/>
            </div>

            <div className="navbar-search">
               <input
                 placeholder='Search for tutorial'

               />
            </div>

            <div className="navbar-take">

                <div className="navbar-button" >
                    <button>Take a quiz test</button>
                </div>

                <div className="navbar-contact">
                     <FaFacebook className="fa"></FaFacebook>
                     <IoLogoYoutube className="io"></IoLogoYoutube>
                </div>

            </div>

            
        </div>
    );
};

export default NavBar;