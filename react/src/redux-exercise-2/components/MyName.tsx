import { useEffect } from "react";
import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMyIP, setName } from "../actions";
import { AppState } from "../reducers";

const MyName = () => {
    const [value, setValue] = useState<string>('');
    const dispatch = useDispatch();
    const {name, ip} = useSelector((state: AppState) => state.info);

    useEffect(() => {
        dispatch(getMyIP());
    }, []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setName(value));
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input name='name' type='text' value={value} onChange={e => setValue(e.target.value)} />
            <button type='submit'>Zapisz</button>
        </form>
        <h1>{name}</h1>
        <p>{ip}</p>
        </>
}

export {MyName}