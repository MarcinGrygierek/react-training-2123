import { Provider } from "react-redux"
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import reduxThunk from "redux-thunk";
import { MyName } from "./components/MyName";
import appReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(appReducer);

const App = () => {
    return <Provider store={store}>
        <MyName />
    </Provider>
}

export default App;
