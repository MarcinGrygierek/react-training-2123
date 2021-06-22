import { useState } from "react"

const Foo = () => {

    const [color, setColor] = useState('#ddd');

    const handleMouseEnter = () => {
        setColor('red');
    }

    const handleMouseLeave = () => {
        setColor('#ddd');
    }

    return <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
        width: 200,
        height: 200,
        border: '1px solid #333',
        backgroundColor: color
    }}></div>
}

const App = () => {
    return <Foo />
}

export default App;