import { React, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import LeftSidebar from "../components/header/LeftSidebar";
import TopHeader from "../components/header/TopHeader";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Layout = () => {
    let navigate = useNavigate();
    const userToken = useSelector((state) => state.auth.userToken);

    useEffect(() => {
        if (!userToken) {
            navigate("/login");
        }
    }, [userToken, navigate]);

   
    return (
        !userToken ? null :
            <>
                <Container fluid className="pad-0 parant-container" >
                    <Navbar className="custom-navbar bg-white  Topheader-wrap d-flex justify-content-between align-items-center flex-wrap">
                        <TopHeader  />
                    </Navbar>
                    <section className="dasborad-wrap">
                        <Row >
                            <Col md={1} className="LeftMenu-warp bg-white">
                                <LeftSidebar />
                            </Col>
                            <Col md={11}>
                                <Outlet />
                            </Col>
                        </Row>
                    </section>



                </Container>
                
            </>
    );
};

export default Layout;
