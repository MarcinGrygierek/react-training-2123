import { Provider } from "react-redux"
import { createStore } from "redux";
import { User } from "./components/User";
import appReducer from "./reducers";

const store = createStore(appReducer);

const App = () => {
    return <Provider store={store}>
        <User />
    </Provider>
}

export default App;
