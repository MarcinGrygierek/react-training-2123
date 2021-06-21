import React from 'react';

const App = () => {
    const className = 'hello-world';

    const getRandomValue = (): string => {
        const arr: string[] = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
        const index = Math.round(Math.random() * 4);
        return arr[index];
    }

    return <h1 
    className={className} 
    data-test={getRandomValue()}
    style={
        {
            position: 'absolute',
            left: Math.random() * 500,
            top: 100,
            backgroundColor: '#555'
        }
    }
    >Hello world</h1>
}

export default App;