import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getProfileById} from '../../actions/profile';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';

const Profile = ({
   match,
   profile:{profile, loading}, 
   auth,
   getProfileById}) => {

   useEffect(()=> { 
      getProfileById(match.params.id);
   }, [getProfileById, match.params.id]);

   return (
      <>
         {profile === null || loading ? <Spinner/> : <>
            <Link to="/profiles" className="btn btn-light">
               Back to Profiles
            </Link>
            {auth.isAuthenicated && auth.loading === false && auth.user._id === profile.user._id && (<Link to="/edit-profile" className="btn btn-dark">
               Edit Profile
            </Link>)}
            <div className="profile-top bg-primary p-2"> 
               <ProfileTop profile={profile}/>
            </div>
            <ProfileAbout profile={profile}/>
         </>}
      </>
   );
};

Profile.propTypes = {
   getProfileById: PropTypes.func.isRequired,
   profile: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ 
   profile: state.profile,
   auth: state.auth
})

export default connect(mapStateToProps, {getProfileById})(Profile);