import React from 'react'
import '../App.css'
import Gallery from '../components/Slider'

export default function Home(props) {
    return (
        <div className='home'>
            <h1>home lol</h1>
            <p>welcome! find your waifu and choose a gift for her.</p>
            <Gallery />
        </div>
    )
}