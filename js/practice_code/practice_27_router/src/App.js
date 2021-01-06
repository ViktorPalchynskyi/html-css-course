import './App.css';
import Home from './Component/Home';
import About from './Component/About/About';
import Contact from './Component/Contact';
import Events from './Component/Events';
import Products from './Component/Products';
import ErrorPage from './Component/ErrorPage';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
      <HashRouter>
         <div className="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Redirect from="/history" to="/about/history"/>
            <Route path="/events" component={Events}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </HashRouter>  
    );
}

export default App;
