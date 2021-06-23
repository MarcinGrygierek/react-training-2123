import { FormEvent, useState } from "react"

interface Volume {
    id: string;
    volumeInfo: {
        title: string;
    }
}

interface BooksResponse {
    items: Volume[];
}

const Books = () => {
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [books, setBooks] = useState<Volume[]>();

    const getBooks = async (value: string) => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`);
            const data: BooksResponse = await response.json();
            setBooks(data.items);
            setLoading(false);
        } catch(e) {
            console.log('Error', e);
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        getBooks(search);
    }

    let content;
    if(loading) content =<p>Trwa ładowanie treści</p>
    else if(books) content = <ul>{books.map(book => <li key={book.id}>{book.volumeInfo.title}</li>)}</ul>

    return <>
        <form onSubmit={handleSubmit}>
            <input name='search' type='text' value={search} onChange={e => setSearch(e.target.value)} />
            <button type='submit'>Szukaj</button>
        </form>
        {content}
    </>
}

const App = () => {
    return <Books />
}

export default App;