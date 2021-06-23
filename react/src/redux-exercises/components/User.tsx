import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../actions";
import { AppState } from "../reducers";

const User = () => {
    const { name, email } = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();

    const generateRandomUser = () => {
        const availableNames = ['Marian', 'Marcin', 'Jan', 'Adam'];
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's' ,'t','u','w','x','y','z'];
        const length = alphabet.length;
        const name = availableNames[Math.round(Math.random() * 3)];

        const firstLength = Math.round(Math.random() * 7 + 1);
        const secondLength = Math.round(Math.random() * 4 + 1);

        let email = "";

        for(let i = 0; i < firstLength; i++) {
            email = `${email}${alphabet[Math.round(Math.random() * (length - 1))]}`
        }
        email = `${email}@`
        for(let i = 0; i < secondLength; i++) {
            email = `${email}${alphabet[Math.round(Math.random() * (length - 1))]}`
        }
        email = `${email}.pl`

        dispatch(updateUser(email, name));
    }

    return <div>
        <div>Imię: {name}</div>
        <div>Email: {email}</div>
        <button onClick={generateRandomUser}>Generuj</button>
    </div>
}

export { User }