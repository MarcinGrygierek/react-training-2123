import { Link } from "react-router-dom"

const Navigation = () => {
    return <nav>
        <ul>
            <li>
                <Link to='/'>About</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
}

export {Navigation}