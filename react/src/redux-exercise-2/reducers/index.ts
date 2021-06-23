import { combineReducers } from "redux";
import infoReducer, { InfoState } from "./info-reducer";

export interface AppState {
    info: InfoState
}

const appReducer = combineReducers({
    info: infoReducer
})

export default appReducer;