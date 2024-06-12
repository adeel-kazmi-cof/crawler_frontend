// BasicInfo component
import React, { useState } from 'react';
import { Accordion, Row, Col, Button,Badge } from 'react-bootstrap';
import { CustomButton } from '../../components/form';


const BasicInfo = ({userBasicInfo}) => {
  const [isAccordionOpen, setAccordionOpen] = useState(true);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };
  const toggleEditMode = () => {
    alert("show")
  }

  return (
    <>
      <Accordion className="pad-0 bg-white">
        <Row md={12} className="pad-10 bg-white row-pad-0">
          <Col md={6}>
            <h5>Basic Info</h5>
          </Col>
          <Col className="d-flex justify-content-end align-items-center" md={6}>
            <CustomButton
              variant="outline-dark"
              className="edit-btn bg-white mt-1 mr-10"
              icon={ <i className="fa fa-pencil clr-light-black" style={{ fontSize: "14px" }}></i>}
              size="sm"
              onClick={toggleEditMode}
            />
             
          
            <a href="#" className="ml-10 mt-1" onClick={toggleAccordion}>
              <i
                className={`fa ${isAccordionOpen ? ' fa-angle-down' : 'fa-angle-up'} clr-light-black`}
                style={{ fontSize: "28px" }}
              ></i>
            </a>
          </Col>
        </Row>

        <span className="single-border d-block"></span>
        <Accordion.Collapse in={isAccordionOpen}>
          <Row className="row-pad-0 mt-10 pb-3">
            <Col md={2}>
              <div className="profile-image">
                <img src="" alt="" />
              </div>
            </Col>
            <Col md={10} className="pad-0">
       
 <Row className='row-pad-0 '>
                <Col md={6} className='pad-0 ' >
                    <label className='ml-10 mb-10 title-label'>{userBasicInfo.full_name}</label><br/>
                    <label className='ml-10 mb-10 title-label'>Role:</label><small className='ml-10 mb-10'>Admin</small><br/>
                    <label className='ml-10 mb-10 '>Email:</label><small className='ml-10 mb-10'>{userBasicInfo.email}</small><br/>
                    <label className='ml-10 mb-10'>Address:</label><small className='ml-10 mb-10'>{userBasicInfo.address}</small><br/>
</Col>
                <Col md={6} className='pad-0'>
                <Badge bg="success" className='mb-10'>Active</Badge><br/>
                <label className='mb-10'>Created at:</label><small className='ml-10 mb-10'>{userBasicInfo?.createdAt}</small><br/>
                <label className='mb-10 '>Phone Number:</label><small className='ml-10 mb-10'>{userBasicInfo?.phone}</small><br/>
                </Col>
                </Row> 
            </Col>
          </Row>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
};

export default BasicInfo;