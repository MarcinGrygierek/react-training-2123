import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

interface Props {
    initial: number
}

const Counter = ({initial}: Props) => {
    const [counter, setCounter] = useState(initial);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if(counter % 5 === 0) {
            console.log(`Aktualna wartość to ${counter}`)
        }
    }, [counter]);

    return <h1>{counter}</h1>;
}

const App = () => {
    return <Counter initial={10} />
}

export default App;