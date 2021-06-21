import React from 'react';

const App = () => {
    const a = window.prompt("Podaj pierwszą liczbę");
    const b = window.prompt("Podaj drugą liczbę");

    // Porównujemy ciągi znaków zatem:
    // !!0 => false
    // !!"0" => true
    // !!"" => false
    if(!a || !b) return <p>Musisz podać obydwie wartości!</p>

  return <h1>{parseInt(a) + parseInt(b)}</h1>
}

export default App;