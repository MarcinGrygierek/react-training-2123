import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Volume } from "./interfaces";

const Book = () => {
    const {id} = useParams<{id: string}>();

    const [book, setBook] = useState<Volume>();
    const [loading, setLoading] = useState<boolean>(false);

    const getBook = async(id: string) => {
        setLoading(true);
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        
        if(response.ok) {
            const data: Volume = await response.json();
            setBook(data);
        } else {
            setBook(undefined);
        }
        setLoading(false);
    }

    useEffect(() => {
        getBook(id);
    }, [id]);

    let content = <p>Nie można odnaleźć podanego dzieła</p>;
    if(loading) content = <p>Trwa ładowanie...</p>

    if(book) content = <>
        <h1>{book.volumeInfo.title}</h1>
        <p>{book.volumeInfo.publishedDate}</p>
    </>

    return <>
        <Link to='/'>Wróć</Link>
        {content}
    </>
}

export default Book;