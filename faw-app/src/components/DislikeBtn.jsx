import axios from 'axios'
import { useState } from 'react'

export default function Dislikes({ id, dislikes }){
    const [dislikeCounter, setDislikeCounter] = useState(dislikes);

    const handleClick = async () => {
        // console.log("UPDATING disLIKES")
        let data = await axios.put(`http://localhost:3001/api/gifts/${id}`, {
            dislikes: dislikeCounter - 1
        })

        setDislikeCounter(data.data.dislikes)
    }

    return (
        <div>
            <h3>{dislikeCounter}</h3>
            <button onClick={() => { handleClick() }}>Dislike</button>
        </div>
    )
}