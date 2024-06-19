import React, { useState } from 'react';
import { Row, Col, Offcanvas, Container, Form } from 'react-bootstrap';
import { downloadarrowblow, crossicon, fileupploed, uploadfile, deletclrred, sms } from '../../helper/Icons/Icon';
import { CustomButton, InputField, Label, Textarea, SelectField } from '../form';
import { create } from '../../store/actions/accountActions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const AddAccount = ({ handleClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
     
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData)
    };

    const sweetAlert = (type, title, text) => {
        Swal.fire({
            icon: type,
            title: title,
            text: text,
            showConfirmButton: false,
            timer: 1000
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
     const payload= new FormData();
     console.log(formData);
     payload.append('account_name', formData.accountName);
     payload.append('user_name', formData.userName);
     payload.append('url', formData.url);
     payload.append('password',formData.token);
     payload.append('start_time', formData.StartTime);
     payload.append('repeat_every', formData.RepeatEvery);
     payload.append('status', (formData.status && formData.status == 0)?0:1);
     dispatch(create(payload)).then(() => {
        handleClose();
            return sweetAlert(
                "success",
                "Success!",
                "Account added successfully!",
            )
          
        }).catch(error => {

            return sweetAlert(
                "error",
                "Error!",
                "Something went wrong!"
            )
        });
     
    
    };

    return (
        <Offcanvas show={true} onHide={handleClose} placement="end" className="bg-ligte-gray custom-offcanvas" style={{ width: "50%" }}>
            <Offcanvas.Header className="model-header bg-white actionlist-header ">
                <Offcanvas.Title>
                    <span className="svg">{sms}</span> Add Account
                </Offcanvas.Title>
                <div className="text-end">
                    <CustomButton onClick={handleClose} className="text-end close-btn " text={crossicon} />
                </div>
            </Offcanvas.Header>
            <Container fluid className="pad-10">
                <Form onSubmit={handleSubmit}>
                    <Row className="mt-20 row-pad-0 bg-white border-radius-5 mt-10 pad-10">
                    
                            
                            <Col md={12} className='mt-10  sms-template-texterea'>
                                
                                <Label className="label-text" text="Token" />
                                <InputField
                                    type="text"
                                    placeholder="Password"
                                    id="token"
                                    name="token"
                                    onChange={handleChange}
                                    value={formData.token}
                                />
                                
                            </Col>
                            <Col md={6} className="mb-10">
                                <Label text="Start Time" className="labelinput"/>
                                <InputField  type="time" id="StartTime" name="StartTime" onChange={handleChange}  placeholder="HH:MM"/>
                            </Col>                        
                            <Col md={6}  className='mb-10' >
                                <Label text="Repeat Every" className="labelinput"/>
                                <InputField  type="number" min="0" id="RepeatEvery" name="RepeatEvery" onChange={handleChange}  placeholder="Repeat After(minuts)"/>
                            </Col>
                            <Col md={6} className="mb-10">
                                <Label className="pad-0" text="Status" htmlFor="status" />
                                <SelectField name="status" options={[{ value: 1, label: "Active"}, {value: 0, label: "Inactive"}]} />
                            </Col>
                            <Col md={12} className='text-end mt-20 mb-10 pad-0'>
                                <CustomButton className="custom-btn-outline mr-10" text="Cancel" onClick={handleClose} />
                                <CustomButton type="submit" className="custom-btn-primary" text="Save" />
                            </Col>
                
                    </Row>
                </Form>
            </Container>
        </Offcanvas>
    );
};

export default AddAccount;
