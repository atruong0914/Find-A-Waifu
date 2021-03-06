import React, { useState } from 'react'
import { createBrowserHistory } from 'history'
import axios from 'axios'

export default function CreateGift(){
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [img, setImg] = useState('')
    const [submit, setSubmit] = useState(false)
    const [gift, setGift] = useState('')

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
        setGift(`${name}, $${price}, ${desc}, ${quantity}, ${img}`)
        console.log('test')
        await axios.post('http://localhost:3001/api/gifts/create', {
            name: name,
            price: price,
            quantity: quantity,
            desc: desc,
            img: img           
        })
    
        // refreshes
        const history = createBrowserHistory();
        history.go(0)
    }

    return (
        <div>
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
