import React, { Component } from 'react';

interface Props {
    loading: boolean;
    total: number;
    withShipping: boolean;
}

class Foo extends Component<Props> {
    render() {
        const {loading, total, withShipping} = this.props;
        if(loading) return null;

        return <div>
            <p>Dane załadowane - {total > 50 ? 'Więcej niż 50' : 'Maksymalnie 50'}</p>
            {withShipping && 'Z transportem'}
        </div>
    }
}

const App = () => {
    return <Foo loading={false} total={200} withShipping />
}
export default App;