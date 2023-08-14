import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaWhatsapp } from "react-icons/fa";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

import venue5 from '../../../assets/images/venue5.jpg';
import venue6 from '../../../assets/images/venue6.jpg';
import venue7 from '../../../assets/images/venue7.jpg';
import venue8 from '../../../assets/images/venue8.jpg';

const SoundAndLightDes = () => {

    const [dropDown,setdropDown] = useState('Dropdown Button')

    const setHallName =(name)=>{
        setdropDown(name)
    }

    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <Container>
                    <Row>
                        <Col>
                            <Col md={10} >
                                <Image src={venue5} thumbnail />
                            </Col>

                            <Col md={10} >
                                <Image src={venue6} thumbnail />
                            </Col>
                            <br />
                            <Link to={`/customer/eventdetails`}>
                            <Button className="addToEvent-btn" variant="primary" size="lg">Add to Compare</Button>{' '}
                            </Link>

                            <Link to={`/ChatDes`}>
                            <Button variant="success" className="chat-btn" size="lg"><FaWhatsapp /></Button>{' '}
                            </Link>
                        </Col>

                        <Col>
                            <Col md={10} >
                                <Image src={venue7} thumbnail />
                            </Col>

                            <Col md={10} >
                                <Image src={venue8} thumbnail />
                            </Col>
                        </Col>


                        <Col>
                            <h2>Araliya Beach Hotel</h2>
                            <Image src={venue6} thumbnail />

                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {dropDown}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setHallName("Hall Phoenix")}>Hall Phoenix</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setHallName("Rose Veranda")} >Rose Veranda</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setHallName("Hall Draffodils")}>Hall Draffodils</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br />
                            <Table striped bordered hover>

                                <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td>No:49, Canel Rd, Colombo</td>
                                        {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>LKR 24,500</td>
                                        {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                                    </tr>

                                    <tr>
                                        <td>Maximum guest count</td>
                                        <td>200</td>
                                    </tr>
                                    <tr>
                                        <td>Hall area</td>
                                        <td>1200sqft</td>
                                    </tr>
                                    <tr>
                                        <td>Hall type</td>
                                        <td>Indoor</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container >
            </div >
        </>
    );
};



export default SoundAndLightDes;