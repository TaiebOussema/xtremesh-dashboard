import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

// material ui
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from '../styles';


const MenuItem = ({label, icon, activeIcon, path, onClick}) => {
    const classes = useStyles();
    const [active, setActive] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname === path)
        // eslint-disable-next-line
    }, [location])

    return (
        
        <ListItem 
          button
          component={Link}
          to={path}
          className = {clsx(classes.menuItem, active && classes.menuItemActive)}
          onClick={onClick}
        >
            <ListItemIcon>
                <Icon>
                    {active ? activeIcon : icon}
                </Icon>
            </ListItemIcon>
            <ListItemText 
                primary={label} 
                primaryTypographyProps={{variant: 'body2'}} 
            />
        </ListItem>
        
    )
}

export default MenuItem