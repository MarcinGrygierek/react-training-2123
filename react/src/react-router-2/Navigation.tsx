import { useState } from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
    const getRandomPath = () => {
        return `/${Math.round(Math.random() * 255)}/${Math.round(Math.random() * 255)}/${Math.round(Math.random() * 255)}`
    }

    const [path, setPath] = useState<string>(getRandomPath());

    const handleClick = () => {
        setPath(getRandomPath());
    }

    return <nav>
        <ul>
            <li>
                <Link to='/255/0/0'>Red</Link>
            </li>
            <li>
                <Link to='/0/255/0'>Green</Link>
            </li>
            <li>
                <Link to='/0/0/255'>Blue</Link>
            </li>
            <li>
                <Link onClick={handleClick} to={path}>Random</Link>
            </li>
        </ul>
    </nav>
}

export { Navigation }