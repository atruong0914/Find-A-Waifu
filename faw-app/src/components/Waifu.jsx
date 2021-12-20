
export default function Waifu({ name, age, dere, origin, img}) {
    return (
        <div className='waifu'>
            <img src={img} alt='waifu' />
            <div className='details'>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Dere Type: {dere}</p>
                <p>Origin: {origin}</p>
            </div>
        </div>

    )
}