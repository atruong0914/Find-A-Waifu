import { useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import axios from 'axios'
import Likes from './LikeBtn'
import Dislikes from './DislikeBtn'


export default function Waifu({ name, age, dere, origin, img, likes, dislikes, id}) {
    let history = useHistory();

    const updatePage = (id) => {
        history.push(`/waifu/${id}`)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/api/waifus/${id}`)
        // refresh
        const history = createBrowserHistory();
        history.go(0)
    }

    return (
        <div className='waifu'>
            <img src={img} alt='waifu' />
            <div className='details'>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Dere Type: {dere}</p>
                <p>Origin: {origin}</p>
                <button onClick={() => { updatePage(id) }}>Modify</button>
                <button onClick={() => { handleDelete(id) }}>Delete</button>
                <Likes id={id} likes={likes} />
                <Dislikes id={id} dislikes={dislikes} />
            </div>
        </div>

    )
}