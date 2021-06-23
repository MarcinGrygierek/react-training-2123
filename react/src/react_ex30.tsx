import { useState, useEffect } from "react";

interface IPResponse {
    ip: string
}

const MyIP = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [ip, setIP] = useState<string>();

    useEffect(() => {
        getMyIP();
    }, []);

    const getMyIP = async() => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data: IPResponse = await response.json();
            setIP(data.ip);
            setLoading(false);
        } catch(e) {
            console.log('error', e);
        }
    }

    if(loading) return <p>Proszę czekać, trwa ładowanie</p>

    return <h1>{ip}</h1>;
}

const App = () => {
    return <MyIP />;
}

export default App;