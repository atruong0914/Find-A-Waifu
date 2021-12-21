import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import Gift from '../components/Gift'
import CreateGift from '../components/Form'



export default function Gifts(props) {
    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        async function getGifts() {
            let gifts = await axios.get('http://localhost:3001/api/gifts');
            console.log(gifts); // TODO: remove later
            setGifts(gifts.data.gifts);
        }
        getGifts();
    }, []);

    return (
        <div>
            <h1>gifts lol</h1>
            {gifts.map((gift, index) => (
                <Gift
                key={index}
                id={gift._id}
                name={gift.name}
                price={gift.price}
                desc={gift.desc}
                quantity={gift.quantity}
                img={gift.img}
                likes={gift.likes}
                dislikes={gift.dislikes}
            />
            ))}

        <div>
            <h1>make gift lol</h1>
            <CreateGift />
        </div>
        </div>
    )
}