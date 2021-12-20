import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import Gift from '../components/Gift'
import CreateGift from '../components/Form'


export default function Gifts(props) {
    const [gifts, setGifts] = useState([]);

    useEffect(async () => {
        let gifts = await axios.get('http://localhost:3001/api/gifts');
        setGifts(gifts.data.gifts);
        console.log(gifts.data.gifts);
    }, [])

    return (
        <div>
            <h1>gifts lol</h1>
            {gifts.map((gift, index) => (
                <Gift
                key={index}
                name={gift.name}
                price={gift.price}
                desc={gift.desc}
                quantity={gift.quantity}
                img={gift.img}
            />
            ))}

        <div>
            <h1>make gift lol</h1>
            <CreateGift />
        </div>
        </div>
    )
}