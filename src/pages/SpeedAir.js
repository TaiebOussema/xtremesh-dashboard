import React from 'react'

import { Container, Row, Col } from 'react-grid-system';
import { Navbar, Nav, Card, Form, FormControl, Button } from 'react-bootstrap';
import { MdRefresh, MdSave, MdFilterList } from 'react-icons/md';
import { CardContent } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DetailsDrawer from '../components/DetailsDrawer';




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
                <Col xs={3}>
                    <Card>
                        <CardContent>
                            <h6>SpeedAir1 - <Chip label="Up" color="primary" size="small" /></h6>
                            <p style={{fontSize:'14px', color:'grey'}}>Ip Address: 192.168.1.138</p>
                        
                        
                        <div>
                            <DetailsDrawer/>
                        </div>
                             
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <CardContent>
                            <h6>SpeedAir1 - <Chip label="Up" color="primary" size="small" /></h6>
                            <p style={{fontSize:'14px', color:'grey'}}>Ip Address: 192.168.1.139</p>
                        
                        
                        <div>
                            <DetailsDrawer/>
                        </div>
                             
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <CardContent>
                            <h6>SpeedAir1 - <Chip label="Down" color="secondary" size="small" /></h6>
                            <p style={{fontSize:'14px', color:'grey'}}>Ip Address: 192.168.1.111</p>
                        
                        
                        <div>
                            <DetailsDrawer/>
                        </div>
                             
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <CardContent>
                            <h6>SpeedAir1 - <Chip label="Down" color="secondary" size="small" /></h6>
                            <p style={{fontSize:'14px', color:'grey'}}>Ip Address: 192.168.1.112</p>
                        
                        
                        <div>
                            <DetailsDrawer/>
                        </div>
                             
                        </CardContent>
                    </Card>
                </Col>
      
            </Row>

            <br/>
            

            <Row>
            <Col xs={3}>
                    <Card>
                        <CardContent>
                            <h6>SpeedAir1 - <Chip label="Down" color="secondary" size="small" /></h6>
                            <p style={{fontSize:'14px', color:'grey'}}>Ip Address: 192.168.1.113</p>
                        
                        
                        <div>
                            <DetailsDrawer/>
                        </div>
                             
                        </CardContent>
                    </Card>
                </Col>
                
      
            </Row>

            
            
            </Col>

        </Container>
    )
}

export default SpeedAir
