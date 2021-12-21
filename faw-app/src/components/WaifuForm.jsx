import React, { useState } from 'react'
import { createBrowserHistory } from 'history'
import axios from 'axios'

export default function CreateWaifu(){
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [dere, setDere] = useState('')
    const [img, setImg] = useState('')
    const [origin, setOrigin] = useState('')
    const [waifu, setWaifu] = useState('')
    const [submit, setSubmit] = useState(false)

    const handleNameChange =  (e) => {
        setName(e.target.value)
    }
    
    const handleAgeChange =  (e) => {
        setAge(e.target.value)
    }
    
    const handleDereChange =  (e) => {
        setDere(e.target.value)
    }

    const handleOriginChange =  (e) => {
        setOrigin(e.target.value)
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
        setWaifu(`${name}, ${age}, ${dere}, ${origin}, ${img}`)
        console.log('test')
        await axios.post('http://localhost:3001/api/waifus/create', {
            name: name,
            age: age,
            dere: dere,
            origin: origin,
            img: img           
        })
    
        // refreshes
        const history = createBrowserHistory();
        history.go(0)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type='text' placeholder='waifu name' value={name} />
                <input onChange={handleAgeChange} type='number' placeholder='age' value={age} />
                <input onChange={handleDereChange} type='text' placeholder='dere type' value={dere} />
                <input onChange={handleOriginChange} type='text' placeholder='origin' value={origin} />
                <input onChange={handleImgChange} type='text' placeholder='img URL' value={img} />
                <button type = 'submit'>Submit</button>
            </form>
            {waifu}
        </div>
    )
}
