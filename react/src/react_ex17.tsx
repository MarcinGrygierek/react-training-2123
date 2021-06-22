import { useEffect } from "react";
import { useState } from "react"

interface Props {
    initial: Date
}

const Foo = ({initial}: Props) => {
    const [datetime, setDatetime] = useState(initial);
    const [title, setTitle] = useState('Aktualna godzina');

    useEffect(() => {
        const interval = setInterval(() => { 
            setDatetime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        console.log('Updated');
    }, [datetime])

     return <>
        <h1>{title}</h1>
        <p>{datetime.toLocaleTimeString()}</p>
    </>
}

const App = () => {
    return <Foo initial={new Date()} />
}

export default App;