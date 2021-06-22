import { useState } from "react";

interface ButtonProps {
    click: () => void
}

const Button = ({click}: ButtonProps) => {
    return <button onClick={click}>
        Usuń
    </button>;
}

interface SingleItem {
    id: number;
    name: string
}

const List = () => {
    const [items, setItems] = useState<SingleItem[]>([
        {id: 1, name: 'Lorem'},
        {id: 2, name: 'Ipsum'}, 
        {id: 3, name: 'Dolor'},
        {id: 4, name: 'Sit'},
        {id: 5, name: 'Amet'}
    ]);

    const deleteItem = (item: SingleItem) => {
        setItems(prevItems => prevItems.filter(el => el.id !== item.id));
    }

    return (
        <ul>
            {items.map(item => <li key={item.id}>
                Element {item.name} <Button click={() => deleteItem(item)} />
            </li>)}
        </ul>
    )
}

const App = () => {
    return <List />
}

export default App;