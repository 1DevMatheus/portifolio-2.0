import React, {useState} from 'react'
import './NavMenu.css'
import CloseIcon from '@mui/icons-material/Close';

export default () =>{

    
    
    
    return(
    <>
        <div id='container'className='container-Menu'>
                
                <div className='menu'>
                    <div className='menuContent'>
                        <a href="">Projects</a>
                    </div>
                    <div className='menuContent'>
                        <a href="">About Me</a> 
                    </div>
                    <div className='menuContent'>
                        <a href="">Contact</a>
                    </div>
                </div>
        </div>
    </>
    );
};