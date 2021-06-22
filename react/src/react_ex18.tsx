const Foo = () => {
    const handleClick = () => {
        console.log('Przycisk został kliknięty!');
    }

    return <button onClick={handleClick}>Kliknij tutaj</button>
}

const App = () => {
    return <Foo />
}

export default App;