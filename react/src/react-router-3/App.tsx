import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { Contact } from "./Contact"
import { About } from "./About"
import { Navigation } from "./Navigation"

const App = () => {
    return <BrowserRouter>
    <Navigation />
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/about' />} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </Switch>
    </BrowserRouter>
}

export default App;