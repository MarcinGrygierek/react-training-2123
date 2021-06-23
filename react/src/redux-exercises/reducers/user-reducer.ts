export interface UserState {
    active: boolean;
    name: string;
    email: string;
}

const initialState: UserState = {
    active: true,
    name: '',
    email: ''
}

export interface UpdateUser {
    type: 'UPDATE_USER',
    payload: {
        name: string,
        email: string
    }
}

export interface ClearUser {
    type: 'CLEAR_USER'
}

type UserAction = 
    | UpdateUser
    | ClearUser;

export default (state = initialState, action: UserAction) => {
    switch(action.type) {
        case 'UPDATE_USER': {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        }

        case 'CLEAR_USER': {
            return initialState
        }

        default: return state;
    }
   
}