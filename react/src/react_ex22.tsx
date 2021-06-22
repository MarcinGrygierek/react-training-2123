interface Props {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
    return <div 
    style={{
        maxWidth: 600,
        width: '100%',
        margin: '0 auto',
        backgroundColor: '#ddd'
    }}
    >
        {children}
    </div>
}

const Foo = () => {
    return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum commodi molestias rerum dolore repellat nesciunt earum, recusandae animi itaque voluptas quis alias harum, perferendis magnam dolores unde eius veniam?</p>
}

const App = () => {
    return <Container>
        <Foo />
    </Container>
}

export default App;