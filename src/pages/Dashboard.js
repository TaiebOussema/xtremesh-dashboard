import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Row, Col } from 'react-grid-system';
import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
import { Navbar, Nav, Card, Form, FormControl, Button } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';

import { MdRefresh, MdSave, MdFilterList } from 'react-icons/md';

//components
import IpList from '../components/dashboard/IpList';
import NumberDevices from '../components/dashboard/NumberDevices';
import TimeRange from '../components/dashboard/TimeRange';
import RadioInfo from '../components/dashboard/RadioInfo';
import SessionTime from '../components/dashboard/SessionTime';


import GridLayout from 'react-grid-layout';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { CardContent } from '@material-ui/core';





const Dashboard = () => {

    return (
        <Container fluid style={{width:'100%'}}>
            
            <Col>
            <Row>
                <Col>
                <Card style={{ paddingLeft:'10px', borderStyle:'solid', borderWidth:'1px'}} >
                    <Row style={{zoom:"80%", }}>
                        <IconButton style={{color:'black'}}>
                                <MdRefresh />
                            </IconButton>
                            <IconButton style={{color:'black'}}>
                                <MdSave />
                            </IconButton>
                            <IconButton style={{color:'black'}}>
                                <MdFilterList />
                        </IconButton>
                    </Row>
                </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={3}>
                    <Card>
                        <NumberDevices text='Active SpeedAir Devices' value='34'/>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card >
                        <TimeRange/>
                    </Card>
                 </Col>
                <Col xs={3}>
                    <Card>
                    <NumberDevices text='Session Up Time' value='10h:55m:23s'/>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <CardContent>
                            Some info   
                        </CardContent>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={5}>
                    <Row>
                        <Col>
                            <Card >
                                <CardContent>
                                    Some info   
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Card >
                                <CardContent>
                                    Some info   
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                    
                </Col>
                <Col xs={4}>
                    <Card>
                        <RadioInfo/>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <IpList/>
                    </Card>
                </Col>
            </Row>
            </Col>

        </Container>

        
    )
}

export default Dashboard