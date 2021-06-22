import React from 'react';

interface Props {
    isOver18: boolean;
}

const Foo = ({isOver18}: Props) => {
    let content =  <p>Jesteś niepełnoletni więc nie możesz przejść dalej</p>;
    if(isOver18) {
        content = <>
            <p>Jesteś pełnoletni więc możesz przejść dalej</p>
            <button>Przejdź dalej</button>
        </>;
    }

    return (
        <div>
            <p>Cześć, witaj w naszej aplikacji!</p>
            {content}
        </div>
    )
}

const App = () => {
  return <Foo isOver18 />
}

export default App;
