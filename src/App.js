import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import clsx from 'clsx';

import Navigation from './components/Navigation';
import routes from './routes';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { MdRefresh, MdSave, MdFilterList } from 'react-icons/md';
import { Navbar, Nav, Card, Form, FormControl, Button } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';


import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  //const [drawer, drawerOpen] = useState(false)

  const open = useSelector((state) => state.drawer.open)


  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      
      <Router>
        <Navigation />
        <div className={open ? clsx(classes.shiftTextRight, classes.pageLayout) : clsx(classes.shiftTextLeft, classes.pageLayout)}>
          <div className={classes.appBarSpacer}></div>
          <Navbar bg="dark" variant="dark" fixed='top' style={{color:'white'}} className={open ? classes.shiftTextRight : classes.shiftTextLeft}>
                Xtremesh
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

export default App