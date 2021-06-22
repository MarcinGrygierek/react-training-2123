import { ChangeEvent, FormEvent, useState } from "react"

interface FormValues {
    number1: number;
    number2: number;
}

const Form = () => {
    const [values, setValues] = useState<FormValues>({
        number1: 0,
        number2: 0
    });

    const [result, setResult] = useState<number>()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const converted = parseInt(e.target.value);
        setValues(prevValues => ({
           ...prevValues,
           [e.target.name]: isNaN(converted) ? 0 : converted
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(values.number1 + values.number2);
    }

    return <form onSubmit={handleSubmit}>
        <div>{result}</div>
        <input type='number' name='number1' value={values.number1} onChange={handleChange} />
        <input type='number' name='number2' value={values.number2} onChange={handleChange} />
        <button type='submit'>Zapisz</button>
    </form>
}

const App = () => {
    return <Form />
}

export default App;