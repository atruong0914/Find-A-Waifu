import React, { useState, useEffect } from 'react'
import { createBrowserHistory } from 'history'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function UpdateGift(){
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [img, setImg] = useState('')
    const [submit, setSubmit] = useState(false)
    const [gift, setGift] = useState('')

    const { id } = useParams();

    useEffect(async () => {
        let { data } = await axios.get(`http://localhost:3001/api/gifts/${id}`);

        let gift = data.gift;
        console.log(data.gift)

        setName(gift.name)
        setPrice(gift.price)
        setDesc(gift.desc)
        setQuantity(gift.quantity)
        setImg(gift.img)
    }, [])

    const handleNameChange =  (e) => {
        setName(e.target.value)
    }
    
    const handlePriceChange =  (e) => {
        setPrice(e.target.value)
    }
    
    const handleDescChange =  (e) => {
        setDesc(e.target.value)
    }

    const handleQuantityChange =  (e) => {
        setQuantity(e.target.value)
    }

    const handleImgChange =  (e) => {
        setImg(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (submit === true){
            return
        }
        setSubmit(true)
        setGift(`${name}, $${price}, ${desc}, ${quantity}`)
        await axios.put(`http://localhost:3001/api/gifts/${id}`, {
            name: name,
            price: price,
            quantity: quantity,
            desc: desc,
            img: img           
        })
    }

    return (
        <div>
            <img src={img} />
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type='text' placeholder='gift name' value={name} />
                <input onChange={handlePriceChange} type='number' placeholder='price name' value={price} />
                <input onChange={handleDescChange} type='text' placeholder='description' value={desc} />
                <input onChange={handleQuantityChange} type='number' placeholder='quantity' value={quantity} />
                <input onChange={handleImgChange} type='text' placeholder='img URL' value={img} />
                <button type = 'submit'>Submit</button>
            </form>
            {gift}
        </div>
    )
}
