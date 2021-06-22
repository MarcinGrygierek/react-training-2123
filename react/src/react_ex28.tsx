import { ChangeEvent, useState } from "react"

const Form = () => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return <form>
        <input type='text' name='email' value={email} onChange={handleEmailChange} />
        <input type='text' name='name' value={name} onChange={handleNameChange} />
    </form>
}

const App = () => {
    return <Form />
}

export default App;