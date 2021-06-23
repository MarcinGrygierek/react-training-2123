import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Color } from "./Color";
import { Navigation } from "./Navigation";

const App = () => {
    return <BrowserRouter>
        <Navigation />
        <Switch>
            <Route path="/:r/:g/:b">
                <Color />
            </Route>
        </Switch>
    </BrowserRouter>
}

export default App;