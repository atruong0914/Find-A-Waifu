import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import Waifu from '../components/Waifu'

export default function Waifus(props) {
    const [waifus, setWaifus] = useState([]);

    useEffect(() => {
        async function getWaifus() {
            let waifus = await axios.get('http://localhost:3001/api/waifus');
            setWaifus(waifus.data.waifus);
            // console.log(waifus.data.waifus);
        }
        getWaifus();
    }, []);

    return (
        <div>
            <h1>waifus lol</h1>
            {waifus.map((waifu, index) => (
               <Waifu
               key={index}
               name={waifu.name}
               age={waifu.age}
               dere={waifu.dere}
               origin={waifu.origin}
               img={waifu.img}
            />
            ))}
        </div>
    )
}