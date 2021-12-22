import React from 'react'
import '../App.css'
import Gallery from '../components/Slider'

export default function Home(props) {
    return (
        <div className='home'>
            <div className='intro'>
            <h1>welcome ʕʘ̅͜ʘ̅ʔ</h1>
            <p>find your waifu and choose a gift for her. don't like one? modify. really don't like one? DELETE.</p>
            <p>below are some of the greatest waifu's</p>
            <button onClick={event => window.location.href='/waifu'}>find my waifu</button>
            <button onClick={event => window.location.href='/gift'}>find my gift</button>
            </div>
            <Gallery />
        </div>
    )
}