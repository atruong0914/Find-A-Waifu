import axios from 'axios'
import { useState } from 'react'

export default function Likes({ id, likes }){
    const [likeCounter, setLikeCounter] = useState(likes);

    const handleClick = async () => {
        console.log("UPDATING LIKES")

        let data = await axios.put(`http://localhost:3001/api/gifts/${id}`, {
            likes: likeCounter + 1
        })

        //console.log(data);
        setLikeCounter(data.data.likes)
    }

    return (
        <div>
            <h3>{likeCounter}</h3>
            <button onClick={() => { handleClick() }}>Like</button>
        </div>
    )
}