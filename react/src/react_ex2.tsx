import React from 'react';

const App = () => {
    const name = 'Marcin';

    const getRandomNumber = () => {
        return Math.round(Math.random() * 100);
    }

    return <h1>Witaj, {name}. Twoja losowa liczba na dzisiaj to: {getRandomNumber()}</h1>
}

export default App;