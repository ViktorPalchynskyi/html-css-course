import logo from './logo.svg';
import React from 'react';
import './App.css';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const ref = React.createRef();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FancyButton ref={ref}>
          Click me!
        </FancyButton>
      </header>
    </div>
  );
}

export default App;
