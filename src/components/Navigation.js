import React from 'react';
import clsx from 'clsx';


// assets
import logo from '../logo.svg';
import logoCropped from '../logoCropped.svg';


// material-ui
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';

import { useStyles } from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import {connect} from 'react-redux';


// components
import MenuItem from './MenuItem';
import routes from '../routes';

const Navigation = () => {

    const dispatch = useDispatch();
    const open = useSelector((state) => state.drawer.open)


    const classes = useStyles();
    //const [open, setOpen] = React.useState(true);

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('xs'))

    const toggleNavigation = () => {
        //setOpen(!open);
        dispatch({type: 'DRAWER_TOGGLE'})
    }

    const closeNavigation = () => {
        if (matches){
            //setOpen(false);
            dispatch({type: 'DRAWER_ClOSED'})
        }
    }

    return (
        <div>
            <AppBar className= {classes.appBar}>
                <Toolbar>
                    <IconButton onClick={toggleNavigation} edge='start' color='inherit' aria-label='Menu'>
                        <MenuIcon />
                    </IconButton>
                    <Typography color='inherit' component='h1' variant='h6'>
                        Xtremesh
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                classes =  {{ paper: clsx(classes.navigationDrawer, !open && classes.navigationDrawerCollapse)}}
                variant = {matches ? 'temporary' : 'permanent'}
                open = {open} //setting the boolean prop of open Drawer to the value of open state
            >
                <div className={clsx(classes.navigationToolbar, !open && classes.navigationToolbarCollapse)}>
                    <IconButton onClick={toggleNavigation}>
                        {open ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                </div>
                <div className={classes.navigationLogoContainer}>
                    <img 
                        className={clsx(classes.navigationLogo, !open && classes.navigationLogoCropped)}
                        src={open ? logo : logoCropped} 
                        alt="LogoXtremesh" 
                    />
                </div>
                
                <List className={classes.navigationList}>
                    {routes.map((route) => {
                        return (
                            <React.Fragment>
                                {route.path === '/sign-out' && (
                                <div className={classes.navigationSpacer}></div>
                                )}
                            <MenuItem 
                                label= {route.label}
                                icon={route.icon} 
                                activeIcon={route.activeIcon} 
                                path={route.path} 
                                onClick={closeNavigation}
                            />
                            </React.Fragment>
                        );
                    })}
                </List>
            </Drawer>
        </div>
    )
};

const mapStateToProps = (state) => ({
    open: state.drawer.open,
});

export default connect(mapStateToProps)(Navigation)