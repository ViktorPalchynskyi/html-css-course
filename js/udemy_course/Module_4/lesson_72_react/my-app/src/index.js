import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class WhoAmI extends Component{ 
  constructor (props) { 
    super(props);
    this.state = {
      years: 25,
      nationality: 'ua'
    };
    // this.nextYear = this.nextYear.bind(this);
    this.nextYear = () => { 
        this.setState(state => ({
          years: ++state.years
        }));
    };
  }
  // nextYear() { 
  //   this.setState(state => ({
  //     years: ++state.years
  //   }));
  // }
  render() { 
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <h1>My name is {name}, surname - {surname}, years = {years}</h1>
        <button onClick={this.nextYear}>++</button>
        <a href={link}>My profile</a>
      </>
    )
  }
}



const All =() => {
  return(
    <>
      <WhoAmI name="John" surname="Black" link="https://www.youtube.com/"/>
      <WhoAmI name="Ivan" surname="Petrikov" link="https://www.youtube.com/"/>
      <WhoAmI name="Viktor" surname="Sputnik" link="https://www.youtube.com/"/>
    </>
  )
}

ReactDOM.render(
  <All/>,
  document.getElementById('root')
);


