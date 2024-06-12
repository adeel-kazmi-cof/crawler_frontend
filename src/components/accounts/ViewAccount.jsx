import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Row, Col, Offcanvas, Container, Form } from 'react-bootstrap';
import { downloadarrowblow, crossicon, fileupploed, uploadfile, deletclrred, sms } from '../../helper/Icons/Icon';
import { CustomButton, InputField, Label, Textarea } from '../form';
import { update, getById } from '../../store/actions/accountActions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const ViewAccount = ({ handleClose, accountId }) => {
    const[id,setid]=useState(accountId)
    const dispatch = useDispatch();
    const { accountDetail, loading, error } = useSelector((state) => state.account);
    useEffect(() => {
        dispatch(getById(accountId));        
    }, [dispatch]);
    
    return (
        <Offcanvas show={true} onHide={handleClose} placement="end" className="bg-ligte-gray custom-offcanvas" style={{ width: "50%" }}>
            <Offcanvas.Header className="model-header bg-white actionlist-header ">
                <Offcanvas.Title>
                    <span className="svg">{sms}</span> Account Detail
                </Offcanvas.Title>
                <div className="text-end">
                    <CustomButton onClick={handleClose} className="text-end close-btn " text={crossicon} />
                </div>
            </Offcanvas.Header>
            <Container fluid className="pad-10">
           
                <Row className="mt-20 row-pad-0 bg-white border-radius-5 mt-10 pad-10 view-templae-wrap">                  
                        
                        <Col md={6}>
                            <Label className="label-input" text="Account Name" />
                            <div className='view-text'>{accountDetail?.account_name}</div>
                        </Col>
                        
                        <Col md={6}>
                            <Label className="label-input" text="User" />
                            <div className='view-text'>{accountDetail?.user_name}</div>
                        </Col>
                        <Col md={12}>
                            <Label className="label-input" text="Account URL" />
                            <div className='view-text'>{accountDetail?.url}</div>
                        </Col>
                        <Col md={12} className='mt-10 sms-template-texterea'>
                            
                            <Label className="label-text" text="Password" />
                            <div className='view-text'>{accountDetail?.password}</div>
                            
                            
                        </Col>
              
                </Row>
            
            </Container>
        </Offcanvas>
    );
};

export default ViewAccount;
