
export default function Gift ({name, quantity, price, desc, img}){
    return (
        <div className='gift'>
            <img src={img} alt='gift' />
            <div className='details'>
                <h2>{name}</h2>
                <p>Price: {'$' + price}</p>
                <p>Description: {desc}</p>
                <p>Quantity: {quantity}</p>
            </div>
            
        </div>
    )
}