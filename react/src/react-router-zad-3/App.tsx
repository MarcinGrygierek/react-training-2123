import { BrowserRouter, Route, Switch } from "react-router-dom"
import Book from "./Book";
import { Books } from "./Books";

const App = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Books} />
            <Route path='/:id' component={Book} />
        </Switch>
    </BrowserRouter>
}

export default App;