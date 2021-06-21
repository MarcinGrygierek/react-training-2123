import React from 'react';

interface Props {
    name: string,
    title?: string
}

const Foo = (props: Props) => {
  return <>
    <h1>{props.title || 'Witaj!'}</h1>
    <p>{props.name}</p>
  </>
}

const App = () => {
    return <Foo name="Lorem ipsum" title="Cześć!"  />
}

export default App;
