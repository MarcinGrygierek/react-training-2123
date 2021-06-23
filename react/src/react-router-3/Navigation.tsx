import { NavLink } from "react-router-dom"

const Navigation = () => {
    return <nav>
        <ul>
            <li>
                <NavLink activeClassName='active' activeStyle={{
                    backgroundColor: '#ddd',
                    borderBottom: '1px solid #aaa'
                }} to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' activeStyle={{
                    backgroundColor: '#ddd',
                    borderBottom: '1px solid #aaa'
                }} to='/contact'>Contact</NavLink>
            </li>
        </ul>
    </nav>
}

export {Navigation}