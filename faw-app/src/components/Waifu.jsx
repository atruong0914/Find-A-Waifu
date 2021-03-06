import { useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import axios from 'axios'
import Likes from './WaifuLikeBtn'
import Dislikes from './WaifuDislikeBtn'


export default function Waifu({ name, age, dere, origin, img, likes, dislikes, id }) {
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
                <h2 className='name-waifu'>{name}</h2>
                <p>Age: {age}</p>
                <p>Dere Type: {dere}</p>
                <p>Origin: {origin}</p>
            <div className='btns-md'>
                <button className='btn-modify' onClick={() => { updatePage(id) }}>Modify</button>
                <button className='btn-delete' onClick={() => { handleDelete(id) }}>Delete</button>
                <Likes id={id} likes={likes} />
                <Dislikes id={id} dislikes={dislikes} />
            </div>
            </div>
        </div>

    )
}