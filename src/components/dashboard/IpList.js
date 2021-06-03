import React , {useEffect } from 'react';

import devices from '../../_mocks_/devices';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import {connect} from 'react-redux';
import { fetchHosts } from '../../redux/actions/hostsActions'
import { useSelector, useDispatch } from 'react-redux';



const IpList = ({hosts, loading, hasErrors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHosts(localStorage.getItem('authKey')))
    }, [dispatch]) //!!!!! Dispatching Hosts

    let ipAdr1, ipAdr2, ipAdr3 = ''
    try {
        ipAdr1 = hosts[0]["interfaces"]["0"]["ip"]
        ipAdr2 = hosts[1]["interfaces"]["0"]["ip"]
        ipAdr3 = hosts[2]["interfaces"]["0"]["ip"]
        console.log(ipAdr1)
    } catch (error) {
        console.log("Loading...")
    }

 return(
    <div>
        
            <Table>
            <TableHead >
                {/*<h7>Devices Status</h7 >*/}
                <TableRow>
                <TableCell style={{fontSize: '16px'}}>
                    UP
                </TableCell>
                
                <TableCell style={{fontSize: '16px'}}>
                    Down
                </TableCell>
    
                </TableRow>
            </TableHead>
            {/*<TableBody>
                {devices.map((devices) => (
                <TableRow
                    hover
                    key={devices.id}
                >
                    
                    <TableCell style={{color: 'green', fontSize: '16px'}}>
                    <h7>{devices.ip}</h7>
                    </TableCell>

                    <TableCell style={{color: 'red', fontSize: '16px'}}>
                    <h7>{devices.ip}</h7>
                    </TableCell>

                    

                </TableRow>
                ))}
                </TableBody>*/}
                <TableBody>
                <TableRow>
                    <TableCell>{ipAdr1}</TableCell>
                    <TableCell>{ipAdr2}</TableCell>
                    <TableCell>{ipAdr3}</TableCell>
                </TableRow>
                </TableBody>
            </Table>
        
        {/*<Box
        style={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
        }}
        >
        <Button
            color="primary"
            endIcon={<ArrowRightIcon />}
            size="small"
            variant="text"
            style={{fontSize: '10px'}}
        >
            View all
        </Button>
        </Box> */}
        
        </div>
);
}

const mapStateToProps = (state) => ({
    open: state.drawer.open,
    loading: state.hosts.loading,
    hosts: state.hosts.hosts,
    hasErrors: state.hosts.hasErrors
});

export default connect(mapStateToProps)(IpList)