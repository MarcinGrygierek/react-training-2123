import React from 'react';

interface Props {
    name: string;
    position: string;
    email: string;
    knowledge: string[];
}

const Card = ({name, position, email, knowledge}: Props) => {

    if(!name) return <p>Niekompletne dane!</p>

    return <div style={{
        padding: 20,
        border: '2px solid #333',
        backgroundColor: '#eee',
        borderRadius: 5
    }}>
        <h1>{name}</h1>
        <p>{position}</p>
        <p>{email}</p>
        <ul>
            {knowledge.map(element => <li key={element}>{element}</li>)}
        </ul>
    </div>
}

const App = () => {
  return <Card 
    knowledge={['TS', 'ES6', 'React', 'Angular']} 
    name='Marcin Grygierek' 
    position='JS/TS developer' 
    email='grygierek.marcin@gmail.com' 
  />
}

export default App;
