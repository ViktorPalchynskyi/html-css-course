import React from 'react';
import {connect} from 'react-redux';
import {add2} from './redux/actions/actions'

class Counter extends React.Component{ 
   render() { 
      return( 
         <div style={{padding:20, border:'1px solid #ccc'}}>
            <h1>Counter {this.props.counter}</h1>
            <hr/>
            <div>
               <button onClick={this.props.onChangeAdd}>Add</button>
               <button onClick={this.props.onChangeSub}>Sub</button>
            </div>
         </div>
      )
   }
}

function mapStateToProps(state){
   
   return { 
     counter: state.counter2.counter2
   }
 }
 
 function mapDispathToProps(dispatch){ 
   return { 
     onChangeAdd:() => dispatch(add2(15)),
     onChangeSub:() => dispatch(add2(-15)),
   }
 }

export default connect(mapStateToProps, mapDispathToProps) (Counter);