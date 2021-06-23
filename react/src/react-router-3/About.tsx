import { Link, Route, Switch } from "react-router-dom";

const About = () => {
    return <div>
        <h1>About</h1>
        <ul>
            <li>
                <Link to='/about/me'>Me</Link>
            </li>
            <li>
                <Link to='/about/company'>Company</Link>
            </li>
        </ul>

        <Switch>
            <Route exact path='/about'>
                <p>You can learn something about me or my company</p>
            </Route>
            <Route path='/about/me'>
                <h2>About me</h2>
            </Route>
            <Route path='/about/company'>
                <h2>About company</h2>
            </Route>
        </Switch>

    </div>
}

export { About };