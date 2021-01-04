import classes from './FinishedQuiz.module.css';

export default props => { 
   return ( 
      <div className={classes.FinishedQuiz}>
         <ul>
            <li>
               <strong>1. </strong>
               How are you?
               <i className={'fa fa-times ' + classes.error}/>
            </li>
            <li>
               <strong>1. </strong>
               How are you?
               <i className={'fa fa-check ' + classes.success}/>
            </li>
         </ul>

         <p>Правильно 4 из 10</p>
         <div>
   
            <button>Повторить</button>
         </div>
      </div>
   )
}