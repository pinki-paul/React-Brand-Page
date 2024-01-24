import React from 'react';
import Logo from '../images/brand_logo.png';
import '../css/nav.css';

export default function Nav(){
    return(
   
        <nav className='container'>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <ul>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Location</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div className='icon'></div>
            <button className='login-btn'>Login</button>
        </nav>
        
    )
}