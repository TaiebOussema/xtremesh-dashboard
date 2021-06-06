import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';


import { fetchAuth } from '../redux/actions/authActions'
import {connect} from 'react-redux';

const Login = ({dispatch, auth}) => {
  
      const [user, setUser] = useState("");
      const [password, setPassword] = useState("");  

      const handleSubmit = async e => {
        e.preventDefault();
        setPassword(password);
        setUser(user);
        console.log(user, password);
        dispatch(fetchAuth(user, password))
      }
      localStorage.setItem('authKey', auth)


      console.log(auth)

        return (
          
          <div style={{background:'#EEEEEE', display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} >

            <div style={{paddingBottom:100}}>
            
            <form onSubmit={handleSubmit}>

                <div className="form-group" style={{paddingTop:30, width:'80vh'}}>
                    <img 
                        style={{marginLeft:100, width:'40vh'}}
                        src={logo} 
                        alt="LogoXtremeshCropped" 
                    />
                    <label style={{fontWeight:'bold', display: 'flex',  justifyContent:'center', alignItems:'center'}}>Please Login</label>
                    <input type="text" className="form-control" placeholder="Enter username" onChange={e => setUser(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button> <br/>
                
            </form>
            <p style={{fontSize: '14px', opacity:'0.7'}}>Notice: Please contact your adminstrator in order to create a new user</p>
            </div>
          </div>
        );
    }

    const mapStateToProps = (state) => ({
        loading: state.hosts.loading,
        auth: state.auth.auth,
        hasErrors: state.hosts.hasErrors
      });


    export default connect(mapStateToProps)(Login)

  
