const Foo = () => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('Przycisk został kliknięty!');
    }

    return <a onClick={handleClick} href="https://www.google.pl">Google</a>
}

const App = () => {
    return <Foo />
}

export default App;