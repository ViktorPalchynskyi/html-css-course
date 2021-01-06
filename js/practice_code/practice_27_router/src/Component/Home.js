import {NavLink} from 'react-router-dom';
import classes from './Home.module.css';

const selectedStyle = {
   backgroundColor: "white",
   color: "tomato"
  };

export default () => (
  <div className={classes.Home}>
     <h1>[Company Website]</h1>
     <nav>
         <NavLink to="/">[Home]</NavLink>
         <NavLink to="about" activeStyle={selectedStyle}>[About]</NavLink>
         <NavLink to="events" activeStyle={selectedStyle}>[Events]</NavLink>
         <NavLink to="products" activeStyle={selectedStyle}>[Products]</NavLink>
         <NavLink to="contact" activeStyle={selectedStyle}>[Contact Us]</NavLink>
     </nav>
  </div>
)