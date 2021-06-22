import React from 'react';

interface Props {
    loading: boolean;
    total: number;
    withShipping: boolean;
}

const Foo = ({loading, total, withShipping}: Props) => {
    if(loading) return null;

    return <div>
        <p>Dane załadowane - {total > 50 ? 'Więcej niż 50' : 'Maksymalnie 50'}</p>
        {withShipping && 'Z transportem'}
        </div>
}

const App = () => {
    return <Foo loading={false} total={200} withShipping />
}
export default App;