import React from 'react';

interface Props {
    loading: boolean;
}

const Loading = () => {
    return <div>
    <p>Trwa ładowanie</p>
    <strong>Poczekaj aż strona zakończy ładowanie danych</strong>
</div>;
}

const Foo = ({loading}: Props) => {
    if(loading) return <Loading />

    return (
        <div>
            <p>Dane załadowane</p>
            <p>Lista użytkowników:</p>
            <ul>
                <li>...</li>
            </ul>
        </div>
    )
}

const App = () => {
    return <Foo loading={false} />
}
export default App;