import { useEffect } from "react"
import { FormEvent, useState } from "react"

interface Volume {
    id: string;
    volumeInfo: {
        title: string;
        publishedDate: string;
    }
}

interface Props {
    id: string;
}

const Book = ({id}: Props) => {
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

    if(loading) return <p>Trwa ładowanie...</p>

    if(book) return <>
        <h1>{book.volumeInfo.title}</h1>
        <p>{book.volumeInfo.publishedDate}</p>
    </>

    return <p>Nie można odnaleźć podanego dzieła</p>
}

const BookForm = () => {
    const [search, setSearch] = useState<string>('');
    const [id, setId] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setId(search);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input name='search' type='text' value={search} onChange={e => setSearch(e.target.value)} />
            <button type='submit'>Szukaj</button>
        </form>
        {id && <Book id={id} />}
    </>
}

const App = () => {
    return <BookForm />
}

export default App;