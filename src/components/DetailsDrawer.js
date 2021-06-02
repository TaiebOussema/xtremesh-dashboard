import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Container, Row, Col } from 'react-grid-system';
import { Navbar, Nav, Card, Form, FormControl, Button } from 'react-bootstrap';
import { MdRefresh, MdSave, MdFilterList } from 'react-icons/md';
import { CardContent } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import { VictoryChart, VictoryLine } from 'victory';



const useStyles = makeStyles({
  list: {
    width: 1000,
  },
  fullList: {
    width: 'auto',
  },
});

const DetailsDrawer = () => {
    
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      //onClick={toggleDrawer(anchor, false)}
      //onKeyDown={toggleDrawer(anchor, false)}
    >
      <Container fluid style={{width:'100%'}}>
            
            <Col>

            <br/>

            <Row>
                <Col>
                <Card style={{ paddingLeft:'10px', borderStyle:'solid', borderWidth:'1px', color:'#007FAF'}} >
                    SpeedAir Devices Details
                </Card>
                </Col>
            </Row>

            <br/>
            

            <Row>
                <Col xs={6}>
                    <Card>
                        <CardContent>
                        SpeedAir2 - Graph Panel here 
                        <VictoryChart minDomain={{ y: 0 }}>
                            <VictoryLine data={""}/>
                        </VictoryChart> 
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card>
                        <CardContent>
                        SpeedAir4 - Graph Panel here 
                        <VictoryChart minDomain={{ y: 0 }}>
                            <VictoryLine data={""}/>
                        </VictoryChart> 
                        </CardContent>
                    </Card>
                </Col>
                
            </Row>

            <br/>
            

            <Row>
                <Col xs={4}>
                    <Card>
                        <CardContent>
                        SpeedAir1 - Graph Panel here <VictoryChart minDomain={{ y: 0 }}>
                        <VictoryLine data={""}/>
                        </VictoryChart> 
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <CardContent>
                        SpeedAir2 - Graph Panel here <VictoryChart minDomain={{ y: 0 }}>
                        <VictoryLine data={""}/>
                        </VictoryChart> 
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <CardContent>
                        SpeedAir4 - Graph Panel here <VictoryChart minDomain={{ y: 0 }}>
                        <VictoryLine data={""}/>
                        </VictoryChart> 
                        </CardContent>
                    </Card>
                </Col>
                
            </Row>

            <br/>
            

            <Row>
                <Col xs={4}>
                    <Card>
                        <CardContent>
                        SpeedAir2 - Graph Panel here <VictoryChart minDomain={{ y: 0 }}>
                        <VictoryLine data={""}/>
                        </VictoryChart> 
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <CardContent>
                        SpeedAir4 - Graph Panel here <VictoryChart minDomain={{ y: 0 }}>
                        <VictoryLine data={""}/>
                        </VictoryChart> 
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <CardContent>
                        SpeedAir4 - Graph Panel here <VictoryChart minDomain={{ y: 0 }}>
                        <VictoryLine data={""}/>
                        </VictoryChart> 
                        </CardContent>
                    </Card>
                </Col>
      
            </Row>

            <br/>

            
            </Col>

        </Container>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button style={{zoom:'80%'}} onClick={toggleDrawer(anchor, true)}>View Details</button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default DetailsDrawer
