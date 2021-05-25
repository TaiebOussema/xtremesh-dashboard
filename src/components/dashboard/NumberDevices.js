import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { red } from '@material-ui/core/colors';
import { BsFillCircleFill } from 'react-icons/bs'

const NumberDevices = ({text, value}) => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                        style={{ justifyContent: 'center' }}
                    >
                        <Grid item>
                        
                        <Typography
                            variant={'h7'}
                        >
                            <BsFillCircleFill style={{color:'#00C965',  paddingBottom: '4px', zoom:'100%'}}/>
                            {' '}{text} 
                        </Typography>
                        <Typography
                            variant={'h6'}
                            style={{ paddingLeft: '90px'}}
                        >
                            {value}
                        </Typography>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
            
                
                
        </div>
    )
}

export default NumberDevices
