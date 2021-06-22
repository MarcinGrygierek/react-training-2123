import React from 'react';

interface Props {
    name: string,
    title?: string
}

const Foo = ({title, name}: Props) => {
    // const title = props.title;
    // const name = props.name;
    // const {title, name} = props;
  return <>
    <h1>{title || 'Witaj!'}</h1>
    <p>{name}</p>
  </>
}

const App = () => {
    return <Foo name="Lorem ipsum" title="Cześć!"  />
}

export default App;
