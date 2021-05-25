import React from 'react';
import {
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';

const SessionTime = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid
                        container
                        style={{ justifyContent: 'center' }}
                    >
                        <Grid item>
                        <Typography
                            variant="h7"
                            style={{ paddingleft: '20px' }}
                        >
                            Up Time
                        </Typography>
                        <Typography
                        variant="h6"
                        >
                            10h:55m:23s
                        </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
                
               
        </div>
    )
}

export default SessionTime
