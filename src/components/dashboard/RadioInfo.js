import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent } from '@material-ui/core';


function createData(radio, up, down) {
  return { radio, up, down };
}

const rows = [
  createData('Simpling Rate', '20 MHZ', '20 MHZ'),
  createData('Tx Channel', '5660 MHZ', '5660 MHZ'),
  createData('Rx Channel', '5660 MHZ', '5660 MHZ'),
  createData('Min Power', '-6 dBm', '-6 dBm'),
  createData('Max Power', '-6 dBm', '-6 dBm'),
];

const RadioInfo = () => {
    return (
        <Card>
            <CardContent>
                <TableContainer >
                    <Table aria-label="simple table" >
                        <TableHead>
                        <TableRow >
                            <TableCell style={{fontSize: '12px'}}>Radio Stats</TableCell>
                            <TableCell align="right" style={{fontSize: '12px'}}>Upstream</TableCell>
                            <TableCell align="right" style={{fontSize: '12px'}}>Downstream</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.radio}>
                            <TableCell  style={{fontSize: '12px'}} component="th" scope="row">
                                {row.radio}
                            </TableCell>
                            <TableCell align="right" style={{fontSize: '12px'}}>{row.up}</TableCell>
                            <TableCell align="right" style={{fontSize: '12px'}}>{row.down}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
        
    )
}

export default RadioInfo
