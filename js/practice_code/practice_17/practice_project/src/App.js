import './App.css';
import {Component} from 'react';


const Wrapper = ({children}) =>
  <div>
    {children}
  </div>

class Test extends Component { 
  render() {
    return <h1>Test component</h1>
  }
}

const Button = props => (
  <button onClick={props.onClick}>{props.text}</button>
)

class ButtonCounter extends Component { 
  state = {counter : 0};

  handleClick = () => this.setState(prevState => ({counter : prevState +1}));

  render() { 
    return(
      <Button onClick={this.handleClick} text={`You clicked ${this.state.counter} times`}/>
    )
  }
}

const GoodCard = ({title, url='#', src, children}) =>
  <div className = 'GoodCard'>
    <h1>Teapot</h1>
<a href={url} >{title}</a>
    <img width="400" height="400" src={src} alt={'Idi nahuy so svoim alt'}/>
    {children}
  </div>

const Yoga = ({children = 'Try it'}) => 
  <form action="#" id="form">
    <fieldset class="form__set">
    <h2 class="form__header">Trial Class</h2>
      <input type="text" placeholder="Enter your name"/>
      <input type="tel" placeholder="Enter your phone"/>
      <button class="form__submit" type="submit">{children}</button>
    </fieldset>
  </form>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <h1>Hello</h1>
          <h2>Darkness</h2>
          <h3>My old</h3>
          <h4>Friend</h4>
          <GoodCard title="Teapot" url="https://www.amazon.com/Old-Amsterdam-Porcelain-Works-2706/dp/B000VBGI5O" src="https://images-na.ssl-images-amazon.com/images/I/71oKpH5yUDL._AC_SL1500_.jpg">
              {<h1>Paskuda</h1>}
            </GoodCard>  
            <Test/>
            <ButtonCounter/>
        </Wrapper>
        <Yoga children = 'Kek'>
          
        </Yoga> 
      </header>
    </div>
  );
}

export default App;
