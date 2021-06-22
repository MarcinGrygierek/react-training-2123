import React, { Component } from 'react';

interface Props {
    name: string,
    title?: string
}

class Foo extends Component<Props> {
    render() {
        const {title, name} = this.props;
        return <>
            <h1>{title || 'Witaj!'}</h1>
            <p>{name}</p>
        </>
    }
}

const App = () => {
    return <Foo name="Lorem ipsum" title="Cześć!"  />
}

export default App;
