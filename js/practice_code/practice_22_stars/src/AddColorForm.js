import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// class AddColorForm extends Component{ 
//    constructor(props) {
//       super(props);
//       this.submit = this.submit.bind(this);
//    }
//    static propTypes = { 
//       onNewColor: PropTypes.func
//    }

//    static defaultProps = { 
//       onNewColor: f=>f
//    }
//    submit(e) { 
//       const {_title, _color} =this.refs;
//       e.preventDefault();
//       this.props.onNewColor(_title.value, _color.value);
//       _title.value='';
//       _color.value='#000';
//       _title.focus();
//    }
//    render() {
//       return( 
//          <from onSubmit = {this.submit}>
//             <input ref="_title" 
//             type="text"
//             placeholder="color title..." required/>
//             <input ref="_color"
//             type="color" required/>
//             <button onClick={this.submit}>ADD</button>
//          </from>
//       )
//    }
// }

const AddColorForm =({onNewColor=f=>f}) => { 
   let _title, _color;
   const submit = e => { 
      e.preventDefault();
      onNewColor(_title.value, _color.value);
      _title.value='';
      _color.value='#000';
      _title.focus();
   };
   return( 
      <from>
            <input ref={input=> _title = input} 
            type="text"
            placeholder="color title..." required/>
            <input ref={input=> _color = input}
            type="color" required/>
            <button onClick={submit}>ADD</button>
         </from>
   );
};


export default AddColorForm;