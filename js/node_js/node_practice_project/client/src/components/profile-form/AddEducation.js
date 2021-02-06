import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addEducation} from '../../actions/profile';
import {Link, withRouter} from 'react-router-dom';

const AddEducation = ({addEducation, history}) => {

   const [formData, setFormData] = useState({
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      description: ''
   });

   const [toDateDisabled, toggleDisabled] = useState(false);

   const {school, degree, fieldofstudy, from, to, current, description} = formData;

   const onChange = e => setFormData({
      ...formData,
      [e.target.name] : e.target.value
   });

   return (
      <>
         <h1 className="large text-primary">
         Add Youre Education
         </h1>
         <p className="lead">
         <i className="fas fa-code-branch"></i> Add any school or bootcamp you have attended
         </p>
         <small>* = required field</small>
         <form className="form" onSubmit={e => {
            e.preventDefault();
            addEducation(formData, history)
         }}>
         <div className="form-group">
            <input type="text" placeholder="* School or Bootcamp" name="school" value={school} onChange={e=> onChange(e)} required />
         </div>
         <div className="form-group">
            <input type="text" placeholder="* Degree or Certificate" name="degree" value={degree} onChange={e=> onChange(e)} required />
         </div>
         <div className="form-group">
            <input type="text" value={fieldofstudy} onChange={e=> onChange(e)} placeholder="Field of Study" name="fieldofstudy" />
         </div>
         <div className="form-group">
            <h4>From Date</h4>
            <input type="date" value={from} onChange={e=> onChange(e)} name="from" />
         </div>
            <div className="form-group">
            <p><input type="checkbox" checked={current} value={current} 
            onChange={e=> {
               setFormData({...formData, current: !current});
               toggleDisabled(!toDateDisabled)
            }} name="current" 
            />{' '} Current Job</p>
         </div>
         <div className="form-group">
            <h4>To Date</h4>
            <input type="date" value={to} onChange={e=> onChange(e)} name="to" disabled={toDateDisabled ? 'disabled' : ''} />
         </div>
         <div className="form-group">
            <textarea
               name="description"
               cols="30"
               rows="5"
               placeholder="Program Description"
               value={description} 
               onChange={e=> onChange(e)}
            ></textarea>
         </div>
         <input type="submit" value={"Submit"} className="btn btn-primary my-1" />
         <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
         </form>
      </>
   );
};

AddEducation.propTypes = {
   addEducation: PropTypes.func.isRequired
};

export default connect(null, {addEducation})(AddEducation);