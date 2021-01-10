import React, {Component} from 'react'
import './App.scss'
import {connect} from 'react-redux'
import Counter from './Counter'
import {add, addTen, addNumber, sub, asyncAdd} from './redux/actions/actions';

class App extends Component {
 

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={this.props.addTen}>Добавить 10</button>
          <button onClick={() =>  this.props.onAddNumber(-15)}>Вычесть 15</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>Асинхронно добавить 100</button>
        </div>

        <Counter/>
      </div>
    )
  }
}

function mapStateToProps(state){
  
  return { 
    counter: state.counter1.counter
  }
}

function mapDispathToProps(dispatch){ 
  return { 
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(addNumber(number)),
    addTen: () => dispatch(addTen()),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps,mapDispathToProps)(App)
