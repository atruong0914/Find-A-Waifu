
export default function Waifu({ name, age, dere, origin, img}) {
    return (
        <div className='waifu'>
            <img src={img} alt='waifu' />
            <div className='details'>
                <h2>{name}</h2>
                <p>age: {age}</p>
                <p>dere: {dere}</p>
                <p>origin: {origin}</p>
            </div>
        </div>

    )
}