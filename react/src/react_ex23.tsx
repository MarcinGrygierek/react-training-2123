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

const App = () => {
    return <Header left={<button>Wróć</button>} middle={<h1>LOGO</h1>} right={<button>Wyloguj</button>} />
}

export default App;