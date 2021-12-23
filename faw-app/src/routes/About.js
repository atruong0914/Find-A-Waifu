import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
    return (
        <div className='about-page'>
            <div className='about-intro'>
            <img src='uwu.png' className='uwu' />
            <div className='about-words'>
            <h1>about (´◡`)</h1>
            <h2>how to use ٩(｡•́‿•̀｡)۶</h2>
            <h3 className='about'>FAW is the best app to find the waifu of your preferred taste >:P<br />
                Create, update, and delete waifu's you hate, love, or don't see. <br /> yeah, do the same for the gifts too.
            </h3>
            <h2 className='who'>who made this ¯\_(ツ)_/¯</h2>
            <h3 className='about'>well since you're reading this far I guess I'll tell you about myself. my name is annika. 
            <br /> actually, here are just some links to my socials.
            </h3>
            </div>
            </div>
        <div className='socials'>
            <a href='https://github.com/atruong0914'>
                <img src='./github.png' className='icon' />
            </a>
            <a href='https://www.instagram.com/ign.xaster/'>
                <img src='./ig.png' className='icon' />
            </a>
            <a href='https://www.twitch.tv/xasterttv'>
                <img src='./twitch.png' className='icon' />
            </a>
            <a href='https://www.linkedin.com/in/annikatruong/'>
                <img src='./li.png' className='icon' />
            </a>
            <a href='mailto:annikatruongt@gmail.com'>
                <img src='./email.png' className='icon' />
            </a>
            <a href='https://www.snapchat.com/add/annoko'>
                <img src='./sc.png' className='icon' />
            </a>
        </div>
        </div>
    )
}