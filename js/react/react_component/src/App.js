import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends Component {

  constructor(props) { 
    super(props);

    this.state = { 
      clicked: false,
      cars: [
        {name:'Ford', year:2018},
        {name:'Audi', year:2016},
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
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter/>
        </ClickedContext.Provider>
        <hr/>
        <button 
        style={{marginTop: 20, backgroundColor:'coral', padding:'10px 20px'}}
        onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        <button 
        style={{marginTop: 20, backgroundColor:'deepskyblue', padding:'10px 20px'}}
        onClick={()=> this.setState({clicked: true})}>Changed clicked</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: 20
        }}>
        {this.state.showCars 
          ? this.state.cars.map(({name, year}, i) => (
            <ErrorBoundary key = {i}>
              <Car 
                year = {year} 
                name = {name}
                index={i} 
                onDelete = {this.deleteHandler.bind(this, i)}
                onChangeName={event => this.onChangeName(event.target.value, i)}
                />
            </ErrorBoundary>
            )) 
          : null  }
        </div>
      </div>
    );
  }
}

export default App;
