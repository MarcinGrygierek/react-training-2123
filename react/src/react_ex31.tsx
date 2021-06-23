import { Component } from "react";

interface IPResponse {
    ip: string
}

interface State {
    ip: string;
    loading: boolean;
}

class MyIP extends Component<{}, State> {
    constructor() {
        super({});

        this.state = {
            ip: '',
            loading: true
        }
    }

    async getMyIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data: IPResponse = await response.json();
            this.setState({
                ip: data.ip,
                loading: false
            })
           
        } catch(e) {
            console.log('error', e);
        }
    }

    componentDidMount() {
        this.getMyIP();
    }

    render() {
        const {ip, loading} = this.state;
        if(loading) return <p>Proszę czekać, trwa ładowanie</p>

        return <h1>{ip}</h1>;
    }
}

const App = () => {
    return <MyIP />;
}

export default App;