export interface InfoState {
    name: string,
    ip: string
}

const initialState: InfoState = {
    name: '',
    ip: ''
}

export interface SetName {
    type: 'SET_NAME',
    payload: string
}

export interface SetMyIp {
    type: 'SET_MY_IP',
    payload: string
}

type InfoAction = 
    | SetName
    | SetMyIp

export default (state = initialState, action: InfoAction) => {
    switch(action.type) {
 
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'SET_MY_IP': {
            return {
                ...state,
                ip: action.payload
            }
        }
        default: return state
    }
}