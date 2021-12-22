import AliceCarousel from 'react-alice-carousel'
import '../App.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-alice-carousel/lib/alice-carousel.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src='rem.png' alt='rem' onDragStart={handleDragStart} />,
    <img src='erina.jpg' alt='erina' onDragStart={handleDragStart} />,
    <img src='asuna.png' alt='couple' onDragStart={handleDragStart} />,
    <img src='umaru.png' alt='umaru' onDragStart={handleDragStart} />
]

const Gallery = () => {
return (
    <div>
        <AliceCarousel mouseTracking items={items} animationDuration={750} />
    </div>
);
}

export default Gallery;