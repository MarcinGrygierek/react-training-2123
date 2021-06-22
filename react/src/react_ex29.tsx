import { ChangeEvent, FormEvent, useState } from "react"

interface FormValues {
    email: string;
    name: string;
}

const Form = () => {
    const [values, setValues] = useState<FormValues>({
        email: '',
        name: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(prevValues => ({
           ...prevValues,
           [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values);
    }

    return <form onSubmit={handleSubmit}>
        <input type='text' name='email' value={values.email} onChange={handleChange} />
        <input type='text' name='name' value={values.name} onChange={handleChange} />
        <button type='submit'>Zapisz</button>
    </form>
}

const App = () => {
    return <Form />
}

export default App;