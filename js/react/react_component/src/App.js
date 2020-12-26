import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Car from './Car/Car';
import { render } from '@testing-library/react';

class App extends Component {

  constructor(props) { 
    super(props);

    this.state = { 
      cars: [
        // {name:'Ford', year:2018},
        // {name:'Audi', year:2016},
        {name:'Mazda', year:2020}
      ],
      pageTitle: 'Reac components',
      showCars: false
    }; 
  }
  toggleCarsHandler = () => { 
    this.setState({ 
      showCars: !this.state.showCars
    });
  };

  onChangeName (name, index) { 
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars
    });
  }

  deleteHandler (index) { 
    const cars = [...this.state.cars];
    
    cars.splice(index, 1);
    this.setState({cars});
  }

  componentWillMount() { 
    console.log('App componentWillMount');
  }

  componentDidMount() { 
    console.log('App componentDidMount');
  }

  render(){
    console.log('App render');
    const divStyle = { 
      textAlign: 'center'
    };


    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <h2>{this.props.title}</h2>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: 20
        }}>
        {this.state.showCars 
          ? this.state.cars.map(({name, year}, i) => (
            <Car 
            key = {i}
            year = {year} 
            onDelete = {this.deleteHandler.bind(this, i)}
            name = {name} 
            onChangeName={event => this.onChangeName(event.target.value, i)}
            />)) 
          : null  }
        </div>
      </div>
    );
  }
}

export default App;
