import { useHistory } from 'react-router-dom'

export default function Gift ({id, name, quantity, price, desc, img}){
    let history = useHistory();

    const updatePage = (id) => {
        history.push(`/gift/${id}`)
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
            </div>
        </div>
    )
}