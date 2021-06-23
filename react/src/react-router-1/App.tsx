import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import { About } from './About';
import { Contact } from './Contact';
import { Navigation } from './Navigation';
import { Services } from './Services';

const App = () => {
    return <BrowserRouter>
        <Navigation />
        <Switch>
            <Route exact path="/">
                <About />
            </Route>
            <Route path='/services'>
                <Services />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
        </Switch>
    </BrowserRouter>
}

export default App;