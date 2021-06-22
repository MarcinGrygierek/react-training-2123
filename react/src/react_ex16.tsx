import React from 'react';
import { Component } from 'react';

interface State {
    datetime: Date,
    title: string
}

interface Props {
    initialTitle: string;
}

class Foo extends Component<Props, State> {
    interval: any;
    constructor(props: Props) {
        super(props);
        this.state = {
            datetime: new Date(),
            title: props.initialTitle
        }
    }

    componentDidMount() {
        console.log('Mounted');
        this.interval = setInterval(() => {
            this.setState({
                datetime: new Date()
            })
        }, 1000);
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        console.log('Updated', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('Will unmount');
        clearInterval(this.interval);
    }

    render() {
        console.log('Render');
        const { datetime, title } = this.state;
        return <>
            <h1>{title}</h1>
            <p>{datetime.toLocaleTimeString()}</p>
            </>
    }
}

const App = () => {
    return <Foo initialTitle="Taki mamy czas" />
}

export default App;