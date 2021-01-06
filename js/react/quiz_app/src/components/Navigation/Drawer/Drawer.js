import React, {Component} from 'react';
import classees from './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {NavLink} from 'react-router-dom'; 

const links = [
   {to: '/', label:'Спосок', exact: true},
   {to: '/auth', label:'Авторизация', exact: true},
   {to: '/quiz-creator', label:'Создать тест', exact: true}
];

export default class Drawer extends Component {
   
   clickHandler = () => {
      this.props.onClose()
   }

   renderLinks() { 
      return links.map((link, index) => { 
         return(
            <li key={index}>
               <NavLink 
               to={link.to} 
               exact={link.exact}
               activeClassName={classees.active}
               onClick={this.clickHandler}
               >
                  {link.label}
               </NavLink>
            </li>
         )
      });
   }

   render() {
      const cls = [classees.Drawer];

      if(!this.props.isOpen) { 
         cls.push(classees.close)
      }

      return(
         <>
         <nav className={cls.join(' ')}>
            <ul>
               {this.renderLinks()}
            </ul>
         </nav>
         {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
         </>
      )
   }
}