import AliceCarousel from 'react-alice-carousel'
import '../App.css'
import 'react-alice-carousel/lib/alice-carousel.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src='rem.png' className="item" style={{width: '100%'},{marginTop:'65px'}}alt='rem' onDragStart={handleDragStart} />,
    <img src='erina.jpg' className="item" style={{width: '100%'}} alt='erina' onDragStart={handleDragStart} />,
    <img src='asuna.png' className="item" style={{width: '100%'}} alt='couple' onDragStart={handleDragStart} />,
    <img src='umaru.png' className="item" style={{width: '100%'}} alt='umaru' onDragStart={handleDragStart} />
]

const Gallery = () => {
    return (
        <div>
            <AliceCarousel 
            mouseTracking items={items}
            animationDuration={750} 
            controlsStrategy="alternate"
            />
        </div>
    );
}

export default Gallery;