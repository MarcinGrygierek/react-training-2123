import React, { Component } from 'react';

interface Props {
    name: string,
    title?: string
}

class Foo extends Component<Props> {
    render() {
        return <>
            <h1>{this.props.title || 'Witaj!'}</h1>
            <p>{this.props.name}</p>
        </>
    }
}

const App = () => {
    return <Foo name="Lorem ipsum" title="Cześć!"  />
}

export default App;
