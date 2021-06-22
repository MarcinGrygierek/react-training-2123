import { ChangeEvent, useState } from "react"

const Form = () => {
    const [email, setEmail] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return <form>
        <input type='text' name='email' value={email} onChange={handleChange} />
    </form>
}

const App = () => {
    return <Form />
}

export default App;