import React from "react";
import "./NavBar.css";

import Switch from '@mui/material/Switch';

import MenuIcon from "@mui/icons-material/Menu";

import CloseIcon from '@mui/icons-material/Close';


export default () => {

  var tag = '>'
  var bar = '/'
  var open_tag = '<'
  
  function handleShowNavMenu(){
    document.getElementById('show').style.top='-100vh';
    document.getElementById('close').style.top='0vh';
    document.getElementById('list').className='aberto'


  };

  function handleClose () {
    document.getElementById('show').style.top='0vh';
    document.getElementById('close').style.top='-100vh';
    document.getElementById('list').className='fechado'


  }
  
    
    
  
    return (
      <>
      <div className="container">
          <div id='close' onClick={handleClose} className="closeOut">
            <CloseIcon />
          </div>
            <div className="darkMode-tittle">
            <span >Dark Mode</span>
            </div>
          
          <span onClick={handleClose}  className="logo">  {open_tag}1DevMatheus {bar}{tag} </span>
        <div className="img-nav-bar">
          <img src="" alt="" />
        </div>

        {/*Começo dos conteudos da navbar  */}

        <div className="nav">
          <div className="navContent">
            <a href="#section-2"> Projects</a>
          </div>
          <span>|</span>
          <div className="navContent">
            <a href="#section-3"> About Me</a>
          </div>
          <span>|</span>
          <div className="navContent">
            <a href="#section-4"> Contact</a>
          </div>
        </div>
        <div id='show' onClick={handleShowNavMenu} className="openIn">
          <span>
            <MenuIcon />
          </span>
          <div onMouseLeave={handleClose} id='list' className='fechado'>
            <div>
            <div><a  href="#section-2">Projects</a></div>
            <div><a href="">About Me</a></div>
            <div><a href="">Contact</a></div>
            </div>
          </div>
        </div>
        {/* Final dos donteudos da navbar */}
        
        
      </div>
    </>
  );
};
