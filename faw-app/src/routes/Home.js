import React from 'react'
import '../App.css'
import Gallery from '../components/Slider'

export default function Home(props) {
    return (
        <div className='layout'>
        <div className='home'>
            <div className='intro'>
                <div className='home-intro'>
                    <h1 className='welcome'>welcome ʕʘ̅͜ʘ̅ʔ</h1>
                    <p>find your waifu and choose a gift for her. don't like one? modify. really don't like one? DELETE.</p>
                    <p>below are some of the greatest waifu's</p>
                </div>
                <div className='btns-wg'>
                    <button className='btn btn-waifu' onClick={event => window.location.href='/waifu'}>( ˘ ³˘) find my waifu</button>
                    <button className='btn btn-gift' onClick={event => window.location.href='/gift'}>( ﾟｰﾟ) find my gift</button>
                </div>
            </div>
            <Gallery />
        </div>
        </div>
    )
}