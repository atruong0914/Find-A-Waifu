import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'

export default function NavBar(){
    return (
        <div className='logo'>
                <img src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa9%2F40%2F45%2Fa94045632d0ec2867d0a4d5a31013407.png&f=1&nofb=1'} alt='logo' className = 'logo-img' />
        <div className='navbar'>
            <Link to ='/' className='link'> Home </Link>
            <Link to ='/waifu' className= 'link'> Waifu </Link>
            <Link to ='/gift' className= 'link'> Gift </Link>
            <Link to = '/about' className= 'link'> About </Link>
            </div>
        </div>
    )
}
