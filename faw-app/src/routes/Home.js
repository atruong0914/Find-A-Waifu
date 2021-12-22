import React from 'react'
import '../App.css'
import Gallery from '../components/Slider'
import 'react-alice-carousel/lib/alice-carousel.css'


export default function Home(props) {
    return (
        <div className='home'>
            <h1>home lol</h1>
            <Gallery />
        </div>
    )
}