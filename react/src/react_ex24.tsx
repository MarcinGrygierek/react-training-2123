interface Props {
    left: React.ReactNode,
    middle: React.ReactNode,
    right: React.ReactNode
}

const Header = ({left, middle, right}: Props) => {
    return <header style={{
        display: 'flex',
        padding: 10,
        backgroundColor: '#ddd'
    }}>
        <div>
            {left}
        </div>
        <div>
            {middle}
        </div>
        <div>
            {right}
        </div>
    </header>
}

interface ButtonProps {
    title: string;
}

const Button = ({title}: ButtonProps) => {
    const handleClick = () => {
        console.log('Kliknięto przycisk', title)
    };
    return <button onClick={handleClick}>{title}</button>
}

const App = () => {
    return <Header 
        left={<Button title='Przycisk 1'/>} 
        middle={<Button title='Przycisk 2'/>} 
        right={<Button title='Przycisk 3'/>}
         />
}

export default App;