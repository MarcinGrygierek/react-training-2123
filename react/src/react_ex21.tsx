const Foo = () => {
    const handleClick = (e: React.MouseEvent, id: string) => {
        console.log('Przycisk został kliknięty!', id);
    }

    return <div>
        <button onClick={(e) => handleClick(e, 'button-1')}>1</button>
        <button onClick={(e) => handleClick(e, 'button-2')}>2</button>
        <button onClick={(e) => handleClick(e, 'button-3')}>3</button>
        </div>
}

const App = () => {
    return <Foo />
}

export default App;