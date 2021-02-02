import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';


const Login = ({login ,isAuthenicated})=> {

   const [formDate, setFormData] = useState({
      email: '',
      password: '',
   });

   const { email, password} = formDate;

   const onChange = e => setFormData({...formDate, [e.target.name]: e.target.value});

   const onSubmit = async e => { 
      e.preventDefault();
      login(email, password);
   };

   // Redirect if logged in
   if(isAuthenicated) { 
     return <Redirect to="/dashboard"/>
   }

   return (
      <>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input 
          type="email" 
          placeholder="Email Address" 
          name="email"
          value={email} 
          onChange={e => onChange(e)}
          required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} 
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
      </>
   );
}

Login.propTypes = { 
  login: PropTypes.func.isRequired,
  isAuthenicated: PropTypes.bool
}

const mapStateToProps = state => ({ 
  isAuthenicated: state.auth.isAuthenicated
});

export default connect(mapStateToProps, {login})(Login);