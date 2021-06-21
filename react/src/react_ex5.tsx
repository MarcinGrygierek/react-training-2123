import React from 'react';

const App = () => {
    const items = [
        {
        id: 1,
        name: 'Lorem'
    },
    {
        id: 2,
        name: 'Lorem 2'
    },
    {
        id: 3,
        name: 'Lorem 3'
    },
    {
        id: 4,
        name: 'Lorem 4'
    },
    {
        id: 5,
        name: 'Lorem 5'
    },
]
  return <ul>
     {items.map(item => <li key={item.id}>
         {item.name}
     </li>)}
  </ul>
}

export default App;
