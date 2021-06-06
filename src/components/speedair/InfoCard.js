import React, { useState, useEffect } from 'react'
import DetailsDrawer from '../DetailsDrawer'
import { CardContent } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { Card } from 'react-bootstrap';
import ContentLoader from "react-content-loader"
import { Col } from 'react-grid-system';
import { BsFillCircleFill } from 'react-icons/bs'




import {connect} from 'react-redux';
import { fetchHosts } from '../../redux/actions/hostsActions'
import { useSelector, useDispatch } from 'react-redux';



const InfoCard = ({hosts, loading, hasErrors}) => {
    const [available, setAvailable] = useState(false)
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(fetchHosts(localStorage.getItem('authKey')))
    }, [dispatch])

    //console.log(hosts["0"])
    

    const fetchInfo = (index) => {
        try {
            return (
                <Col xs={3} style={{paddingBottom:'30px'}}>
                <div>
                    <Card>
                        <CardContent>
                            <h6>{hosts[index].name} <BsFillCircleFill color={hosts[index].snmp_available == 1 ? "#00C965" : "red"} style={{paddingBottom: '4px'}}/></h6>
                            <h7 style={{fontSize:'14px', color:'grey'}}>(SNMP availability check) - Status:  {hosts[index].snmp_available == 1 ? <a style={{color:'green'}}>Up</a>  : <a style={{color:'red'}}>Down</a>} </h7>
                            <br/>
                            <a style={{fontSize:'14px', color:'grey'}}>Host Id: {hosts[index].hostid}</a>
                            <br/>
                            <a style={{fontSize:'14px', color:'grey'}}>Ip Address: {hosts[index]["interfaces"]["0"]["ip"]}</a>
                            <br/>
                        <div style={{padding:'5px'}}>
                            <DetailsDrawer/>
                        </div>
                        </CardContent>
                    </Card>
                </div>
                </Col>
            )
        } catch (error) {
            return <ContentLoader><rect x="10" y="10" rx="30" ry="30" width="280" height="100" /></ContentLoader>
        }
        
    }

    let hostsIndexArray = []
    const getIndexes = () => {
        for(let i=0; i<hosts.length; i++){
            hostsIndexArray.push(i)
        }
    }
    getIndexes()
    //console.log(hostsIndexArray)
    

    return (
        // <div>
        //     <Card>
        //         <CardContent>
        //             <h6>{hosts[index].name} - <Chip label="Up" color="primary" size="small" /></h6>
        //             <p style={{fontSize:'14px', color:'grey'}}>Ip Address: 192.168.1.138</p>
        //         <div>
        //             <DetailsDrawer/>
        //         </div>
        //         </CardContent>
        //     </Card>
        // </div>
        <>
        {hostsIndexArray.map((index) => fetchInfo(index))}
        </>
    )
}


const mapStateToProps = (state) => ({
    loading: state.hosts.loading,
    hosts: state.hosts.hosts,
    hasErrors: state.hosts.hasErrors
});

export default connect(mapStateToProps)(InfoCard)
