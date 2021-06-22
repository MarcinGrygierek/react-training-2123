import React, { useState } from "react"

const MouseBox = () => {
    const [x, setX] = useState<number>();
    const [y, setY] = useState<number>();

    const handleMouse = (e: React.MouseEvent) => {
        setX(e.clientX);
        setY(e.clientY);
    }
    
    return (
        <div 
        onMouseMove={handleMouse}
        style={{
            background: '#ddd',
            width: 200,
            height: 200,
        }}>
            <div>
                {x}px
            </div>
            <div>
                {y}px
            </div>
        </div>
    )
}

const App = () => {
    return <MouseBox />
}

export default App;