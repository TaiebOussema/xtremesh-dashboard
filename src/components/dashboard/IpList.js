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

const IpList = () => (
    <div>
        
            <Table>
            <TableHead >
                {/*<h7>Devices Status</h7 >*/}
                <TableRow>
                <TableCell style={{fontSize: '12px'}}>
                    UP
                </TableCell>
                
                <TableCell style={{fontSize: '12px'}}>
                    Down
                </TableCell>
    
                </TableRow>
            </TableHead>
            <TableBody>
                {devices.map((devices) => (
                <TableRow
                    hover
                    key={devices.id}
                >
                    
                    <TableCell style={{color: 'green', fontSize: '12px'}}>
                    {devices.ip}
                    </TableCell>

                    <TableCell style={{color: 'red', fontSize: '12px'}}>
                    {devices.ip}
                    </TableCell>

                    

                </TableRow>
                ))}
            </TableBody>
            </Table>
        
        <Box
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
        </Box>
        </div>
);

export default IpList