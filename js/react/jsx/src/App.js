import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

function App() {
  const divStyle = { 
    textAlign: 'center'
  };
  return (
    <div style={divStyle}>
      <h1>Hello V</h1>

      <Car name={'Ford'} year={2018}>
        <p style={{color:'coral'}}>COLOR</p>
      </Car>
      <Car name={'Audi'} year={2016}/>
      <Car name={'Lada'} year={2020}/>
    </div>
  );
}

export default App;
