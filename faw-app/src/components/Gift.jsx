import { useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import axios from 'axios'
import Likes from './LikeBtn'


export default function Gift ({id, name, quantity, price, desc, img, likes}){
    let history = useHistory();

        console.log("LIKES: ", likes)

    const updatePage = (id) => {
        history.push(`/gift/${id}`)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/api/gifts/${id}`)
        // refresh
        const history = createBrowserHistory();
        history.go(0)
    }

    return (
        <div className='gift'>
            <img src={img} alt='gift' />
            <div className='details'>
                <h2>{name}</h2>
                <p>Price: {'$' + price}</p>
                <p>Description: {desc}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => { updatePage(id) }}>Modify</button>
                <button onClick={() => { handleDelete(id)}}>Delete</button>
                <Likes id={id} likes={likes} />
            </div>
        </div>
    )
}