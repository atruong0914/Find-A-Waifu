export default function Likes(props){
    const handleClick = (e) => {
        let newLikes = props.totalLikes + 1;
        props.setTotalLikes(newLikes);
    }

    return <button onClick={handleClick}>Like</button>
}