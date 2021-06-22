// W tym przypadku występuje konieczność przekazanie funkcji przez całe drzewo komponentów w dół
// aż do przycisku który tą metodą wywoła - nie jest to ani czytelne ani wygodne

interface Props {
    click: () => void;
}

const Foo = ({click}: Props) => {
    return <button onClick={click}>Click</button>
}
const Bar = ({click}: Props) => {
    return <Foo click={click} />
}

const Baz = ({click}: Props) => {
    return <Bar click={click} />
}

const Buz = ({click}: Props) =>{
    return <Baz click={click} />
}

const App = () => {
    const foo = () => {
        console.log('Action in App component');
    }
    return <Buz click={foo} />
}

export default App;