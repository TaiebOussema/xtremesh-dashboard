import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    appRoot: {
        display: 'flex',
    },
    appBar: {
        background: '#1D3856',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    appBarSpacer: {
        [theme.breakpoints.down('xs')]: {
            ...theme.mixins.toolbar,
        }
    },
    navigationLogo: {
        width: "70%",
        marginTop: 0,
        marginBottom: 0,
        cursor: 'pointer'
    },
    navigationLogoCropped: {
        width: '70%',
        cursor: 'pointer'
    },
    navigationLogoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: theme.spacing(6)
    },
    navigationDrawer: {
        width: 200,
        borderRight: 'none',
        borderWidth: '0px',
        borderRightColor: '#E3E3E3',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        position: 'fixed',
        height: '100vh',
        boxShadow: '0px 0px 15px grey'
    },
    navigationDrawerCollapse: {
        width: theme.spacing(7)
    },
    navigationToolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: theme.spacing(0),
        ...theme.mixins.toolbar
    },
    navigationToolbarCollapse: {
        justifyContent: 'center',
        paddingRight: 0
    },
    navigationList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    },
    navigationSpacer: {
        flex: 1
    },
    menuItemIcon: {
        width: '100%'
    },
    menuItem: {
        width: '100%',
        borderRadius: theme.spacing(0),
        marginBottom: theme.spacing(1),
        marginLeft: 0   
    },
    menuItemActive: {
        backgroundColor: '#EBEBEC',
        
    },
    pageLayout: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 70,
        paddingLeft: 10,
        background: '#DEDEDE',
        overflowX: 'hidden',
        overflowY: 'hidden',
        height:'100%'
        
    },

    shiftTextLeft: {
        marginLeft: theme.spacing(7)
      },
      shiftTextRight: {
        marginLeft: 200,
      }
}));