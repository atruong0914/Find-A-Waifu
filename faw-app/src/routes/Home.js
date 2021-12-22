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
                <div className='btns-wg'>
                    <button className='btn-waifu' onClick={event => window.location.href='/waifu'}>( ˘ ³˘) find my waifu</button>
                    <span className='space'></span>
                    <button className='btn-gift' onClick={event => window.location.href='/gift'}>( ﾟｰﾟ) find my gift</button>
                </div>
            </div>
            <Gallery />
        </div>
    )
}