import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function UpdateWaifu(){
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [dere, setDere] = useState('')
    const [img, setImg] = useState('')
    const [origin, setOrigin] = useState(false)
    const [waifu, setWaifu] = useState('')
    const [submit, setSubmit] = useState(false)
    
    const { id } = useParams();

    useEffect(async () => {
        let { data } = await axios.get(`http://localhost:3001/api/waifus/${id}`);

        let waifu = data.waifu;
        console.log(data.waifu)

        setName(waifu.name)
        setAge(waifu.age)
        setDere(waifu.dere)
        setOrigin(waifu.origin)
        setImg(waifu.img)
    }, [])

    const handleNameChange =  (e) => {
        setName(e.target.value)
    }
    
    const handleAgeChange =  (e) => {
        setAge(e.target.value)
    }
    
    const handleDereChange =  (e) => {
        setDere(e.target.value)
    }

    const handleOriginChange =  (e) => {
        setOrigin(e.target.value)
    }

    const handleImgChange =  (e) => {
        setImg(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (submit === true){
            return
        }
        setSubmit(true)
        setWaifu(`${name}, ${age}, ${dere}, ${origin}, ${img}`)
        await axios.put(`http://localhost:3001/api/waifus/${id}`, {
            name: name,
            age: age,
            dere: dere,
            origin: origin,
            img: img         
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type='text' placeholder='waifu name' value={name} />
                <input onChange={handleAgeChange} type='number' placeholder='age' value={age} />
                <input onChange={handleDereChange} type='text' placeholder='dere type' value={dere} />
                <input onChange={handleOriginChange} type='text' placeholder='origin' value={origin} />
                <input onChange={handleImgChange} type='text' placeholder='img URL' value={img} />
                <button type = 'submit'>Submit</button>
            </form>
            {waifu}
        </div>
    )
}
