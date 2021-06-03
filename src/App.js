import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import clsx from 'clsx';

import Navigation from './components/Navigation';
import Login from './components/Login'

import routes from './routes';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { MdRefresh, MdSave, MdFilterList } from 'react-icons/md';
import { Navbar, Nav, Card, Form, FormControl, Button } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';


import 'bootstrap/dist/css/bootstrap.min.css';



import { fetchHosts } from './redux/actions/hostsActions'
import { fetchAuth } from './redux/actions/authActions'
import {connect} from 'react-redux';




const App = ({dispatch, hosts, loading, hasErrors}) => {

/*useEffect(() => {
    dispatch(fetchAuth('Admin', 'zabbix'))
    dispatch(fetchHosts())
}, [dispatch]);

localStorage.setItem('authKey', auth)
console.log(auth)*/


//try {
//  console.log(hosts[2]["interfaces"]["0"]["ip"])
//} catch (error) {
//  console.log("plz wait !")
//}

//if (loading === false) return console.log(hosts[2]["interfaces"]["0"]["ip"])


//console.log(localStorage.getItem('authKey'))

  

  const open = useSelector((state) => state.drawer.open)


  const classes = useStyles();

  let authKey = localStorage.getItem('authKey')



  if(!authKey || authKey==="undefined"){
    return (
      <Login/>
    )
  }

  
  
  return (
    
    <div className={classes.appRoot}>
      
      <Router>
        <Navigation />
        <div className={open ? clsx(classes.shiftTextRight, classes.pageLayout) : clsx(classes.shiftTextLeft, classes.pageLayout)}>
          <div className={classes.appBarSpacer}></div>
          <Navbar bg="secondary" variant="dark" fixed='top' style={{color:'white'}} className={open ? classes.shiftTextRight : classes.shiftTextLeft}>
                <a style={{fontSize:'20px'}}>Xtremesh</a>  
                <Nav className="mr-auto">
                </Nav>
                <Nav style={{zoom:"80%"}}>
                    <IconButton style={{color:'white'}}>
                        <MdRefresh />
                    </IconButton>
                    <IconButton style={{color:'white'}}>
                        <MdSave />
                    </IconButton>
                    <IconButton style={{color:'white'}}>
                        <MdFilterList />
                    </IconButton>
                </Nav>
            </Navbar>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route exact key={index} path={route.path}>
                  {route.component}
                </Route>
              );
            })}
          </Switch>
        </div>
      </Router>
    </div>
  )
} 

const mapStateToProps = (state) => ({
  loading: state.hosts.loading,
  hosts: state.hosts.hosts,
  auth: state.auth.auth,
  hasErrors: state.hosts.hasErrors
}); 

export default connect(mapStateToProps)(App)