import React from 'react'

import { Container, Row, Col } from 'react-grid-system';
import { Navbar, Nav, Card, Form, FormControl, Button } from 'react-bootstrap';
import { MdRefresh, MdSave, MdFilterList } from 'react-icons/md';
import { CardContent } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DetailsDrawer from '../components/DetailsDrawer';
import InfoCard from '../components/speedair/InfoCard'




const SpeedAir = () => {

    
    return (
        <Container fluid style={{width:'100%'}}>
            
            <Col>

            <Row>
            <Col >
                <Card style={{ padding:'7px 3px 0px 10px', color:'#007FAF'}} >
                    <h6>Xtremesh Devices Page</h6>
                
                </Card>
                </Col>
            </Row>

            <br/>
            

            <Row>
                <InfoCard />                
            </Row>

            <br/>
            
            </Col>

        </Container>
    )
}

export default SpeedAir
