import React from 'react';

const Card = () => {
    const knowledge = ['TS', 'ES6', 'React', 'Angular'];

    return <div style={{
        padding: 20,
        border: '2px solid #333',
        backgroundColor: '#eee',
        borderRadius: 5
    }}>
        <h1>Marcin Grygierek</h1>
        <p>JS/TS developer</p>
        <p>grygierek.marcin@gmail.com</p>
        <ul>
            {knowledge.map(element => <li key={element}>{element}</li>)}
        </ul>
    </div>
}

const App = () => {
  return <Card />
}

export default App;
