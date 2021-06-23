import { Dispatch } from "react";
import { SetMyIp, SetName } from "../reducers/info-reducer";

export const setName = (name: string): SetName => {
    return {
        type: 'SET_NAME',
        payload: name
    }
}

export const getMyIP = () => async (dispatch: Dispatch<SetMyIp>) => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();

        dispatch({
            type: 'SET_MY_IP',
            payload: data.ip
        })

    } catch(e) {
        console.log(e);
    }
}