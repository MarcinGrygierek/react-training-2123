import { useEffect } from "react";
import { useState } from "react"

const Likes = () => {
    const [likes, setLikes] = useState<number>(0);

    const handleLike = (isLiked: boolean) => {
       
        if(isLiked) {
            setLikes(prevLikes => prevLikes + 1);
        } else if(likes > 0) {
            setLikes(prevLikes => prevLikes - 1);
        }
    }

    return <>
        <LikesCount likes={likes}/>
        <Posts handleLike={handleLike} />
    </>
}

interface LikesCountProps {
    likes: number
}

const LikesCount = ({likes}: LikesCountProps) => {
    return <p>Łączna ilość polubień: {likes}</p>
}

interface SinglePost {
    id: number,
    text: string
}

interface PostsProps {
    handleLike: (isLiked: boolean) => void
}

const Posts = ({handleLike}: PostsProps) => {
    const items: SinglePost[] = [ 
        { id: 1, text: 'Lorem' },
        { id: 2, text: 'Ipsum' },
        { id: 3, text: 'Dolor' },
        { id: 4, text: 'Sit' },
    ]

    return <div>
        {items.map(item => <Post key={item.id} item={item} handleLike={handleLike} />)}
    </div>
}

interface PostProps {
    item: SinglePost
    handleLike: (isLiked: boolean) => void
}

const Post = ({item, handleLike}: PostProps) => {
    const [liked, setLiked] = useState<boolean>(false)

    const handleClick = () => {
        setLiked(prev => !prev);
    }

    useEffect(() => {
        handleLike(liked)
    }, [liked])

    return <div>
        <h2>{item.id}</h2>
        <button onClick={handleClick}>{liked ? 'Odlajkuj' : 'Polajkuj'}</button>
    </div>
}

const App = () => {
    return <Likes />
}

export default App;