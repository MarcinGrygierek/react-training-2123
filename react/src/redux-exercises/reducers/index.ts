import { combineReducers } from "redux";
import userReducer, { UserState } from "./user-reducer";

export interface AppState {
    user: UserState
}

const appReducer = combineReducers({
    user: userReducer
})

export default appReducer;

// interface Store {
//     user: {
//         active: boolean;
//         name: string;
//         email: string;
//     }
// }