import axios from 'axios'

export default function Likes({ id, likes }){
    const handleClick = async () => {
        await axios.put(`http://localhost:3001/api/gifts/${id}`, {
            likes: likes + 1
        })
    }

    return <button onClick={() => { handleClick() }}>Like</button>
}