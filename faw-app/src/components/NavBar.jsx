import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'

export default function NavBar(){
    return (
        <div className='logo'>
                <img src={'./fawLogo.png'} alt='logo' className = 'logo-img' />
        <div className='navbar'>
            <Link to ='/' className='link'> Home </Link>
            <Link to ='/waifu' className= 'link'> Waifu </Link>
            <Link to ='/gift' className= 'link'> Gift </Link>
            <Link to = '/about' className= 'link'> About </Link>
            </div>
        </div>
    )
}
