import { useState } from "react";



function App({list}) {

  return (
    <ul>
      {list.map((char, index) => (
        <li key={index}><strong>{char.name}</strong> - {char.side}</li>
      ))}
    </ul>
  );
}

export default App;
