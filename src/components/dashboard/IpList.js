import React , {useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { CardContent } from '@material-ui/core';
import { Navbar, Nav, Card, Form, FormControl, Button } from 'react-bootstrap';

import devices from '../../_mocks_/devices';
import PerfectScrollbar from 'react-perfect-scrollbar';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import {connect} from 'react-redux';
import { fetchHosts } from '../../redux/actions/hostsActions'
import { useSelector, useDispatch } from 'react-redux';



const IpList = ({hosts, loading, hasErrors}) => {
    const dispatch = useDispatch();

    let ipObject = {
        "ip":"",
        "status":""
    }

    let upArray = []
    let downArray = [] //0->UP, 1-> down

    useEffect(() => {
        dispatch(fetchHosts(localStorage.getItem('authKey')))
    }, [dispatch]) //!!!!! Dispatching Hosts

    //console.log(hosts[0]["interfaces"]["0"]["ip"])
    
    
        try {
            for(let i=0 ; i < hosts.length; i++) {
                if(hosts[i].snmp_available == 1) {
                    upArray.push(hosts[i]["interfaces"]["0"]["ip"])
                } else {
                    downArray.push(hosts[i]["interfaces"]["0"]["ip"])
                }
            }
    
            // let ipAdr1 = hosts[0]["interfaces"]["0"]["ip"]
            // let ipAdr2 = hosts[1]["interfaces"]["0"]["ip"]
            // let ipAdr3 = hosts[2]["interfaces"]["0"]["ip"]
           
        } catch (error) {
            console.log(error)
        }

        console.log(upArray)

        const IpArray = [
            upArray,
            downArray
        ]
            
    
    
        console.log(IpArray)

        const listUp  = upArray.map((ip) => 
            <div>
                <Row>
                    <Col>
                        <Card style={{color:'green',display:'flex', alignItems:'center'}}>
                            {ip}
                        </Card>
                    </Col>
                </Row>
                <br/>
            </div>
            
        )

        const listDown  = downArray.map((ip) => 
            <div>
                <Row>
                    <Col>
                        <Card style={{color:'red',display:'flex', alignItems:'center'}} >
                            {ip}
                        </Card>
                    </Col>
                </Row>
                <br/>
            </div>
        )
        

 return(
    <Container fluid style={{width:'100%'}}>
            
            <Col >   
            <p style={{color:'navy',display:'flex', justifyContent:'center'}}>Availability (SNMP)</p>
            <Row>
                <Col xs={6}>
                    <p style={{color:'green',display:'flex', justifyContent:'center'}}>Up</p>
                </Col>
                <Col xs={6}>
                    <p style={{color:'red',display:'flex', justifyContent:'center'}}>Down</p>
                </Col>
            </Row>   
            <Row >
                {/* map UP here in this Col tag*/}
               
                <Col xs={6} >
                    {listUp}
                </Col>

                {/* map down in this Col tag */}
                <Col xs={6}>
                    {listDown}
                </Col>
            </Row>
            </Col>

        </Container>
);
}

const mapStateToProps = (state) => ({
    loading: state.hosts.loading,
    hosts: state.hosts.hosts,
    hasErrors: state.hosts.hasErrors
});

export default connect(mapStateToProps)(IpList)