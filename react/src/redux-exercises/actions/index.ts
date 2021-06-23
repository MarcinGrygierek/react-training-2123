import { ClearUser, UpdateUser } from "../reducers/user-reducer"

export const updateUser = (email: string, name: string): UpdateUser => {
    return {
        type: 'UPDATE_USER',
        payload: {
            email,
            name
        }
    }
}

export const clearUser = (): ClearUser => {
    return {
        type: 'CLEAR_USER'
    }
}