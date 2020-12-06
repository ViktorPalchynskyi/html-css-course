// import { Component } from 'react';
import './App.css';

const UserList = ({list}) => (
  <ul>
    {list.map(elem => <li>{`${elem}`}</li>)}
  </ul>
)

const arr = ['Viktor', 'Tatyana', 'Elena', 'Mikhail', 'Irina'];

const Button = props => {
  const { type, ...other } = props;
  const className = type === "coral" ? "Coral" : "DeepSkyBlue";
  return <button className={className} {...other} />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList list={arr}/>
        <Button type='coral' onClick={() =>console.log('click')}>Click me</Button>
      </header>
    </div>
  );
}

export default App;
