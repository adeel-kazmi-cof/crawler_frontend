import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Row, Col, Offcanvas, Container, Form } from 'react-bootstrap';
import { downloadarrowblow, crossicon, fileupploed, uploadfile, deletclrred, sms } from '../../helper/Icons/Icon';
import { CustomButton, InputField, Label, Textarea, SelectField } from '../form';
import { update, getById } from '../../store/actions/accountActions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const EditAccount = ({ handleClose, accountId }) => {
      const[id,setid]=useState(accountId)
    const dispatch = useDispatch();
    const { accountDetail, loading, error } = useSelector((state) => state.account);
    const [formData, setFormData] = useState({});
    useEffect(() => {
        dispatch(getById(accountId));        
    }, [dispatch]);
    useLayoutEffect(() => {
        formData["account_name"] = accountDetail?.account_name;
        formData["url"] = accountDetail?.url;
        formData["user_name"] = accountDetail?.user_name;
        formData["password"] = accountDetail?.password;
        formData["StartTime"] = accountDetail?.start_time;
        formData["RepeatEvery"] = accountDetail?.repeat_every;
        formData["status"] = accountDetail?.status;
    }, [accountDetail]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
     
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(name, value);
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
        var formDataFields = {
            'account_name': formData.accountName,
            'user_name': formData.userName,
            'url': formData.url,
            'password': formData.token,
            'start_time': formData.StartTime,
            'repeat_every': formData.RepeatEvery,
            'status': (formData.status && formData.status == 0)?0:1
        }
    
        dispatch(update({accountId, formDataFields})).then(() => {
            handleClose();
            return sweetAlert(
                    "success",
                    "Success!",
                    "Account edited successfully!",
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
                    <span className="svg">{sms}</span> Edit Account
                </Offcanvas.Title>
                <div className="text-end">
                    <CustomButton onClick={handleClose} className="text-end close-btn " text={crossicon} />
                </div>
            </Offcanvas.Header>
            <Container fluid className="pad-10">
            <Form >
                <Row className="mt-20 row-pad-0 bg-white border-radius-5 mt-10 pad-10">                  
                        
                        <Col md={6}>
                            <Label className="label-input" text="Account Name" />
                            <InputField type="text" id="accountName" name="accountName" placeholder="Add Account name" onChange={handleChange} defaultValue={formData?.account_name} />
                        </Col>
                        
                        <Col md={6}>
                            <Label className="label-input" text="User" />
                            <InputField type="text" id="userName" name="userName" placeholder="Add User" onChange={handleChange} defaultValue={accountDetail?.user_name} />
                        </Col>
                        <Col md={12}>
                            <Label className="label-input" text="Account URL" />
                            <InputField type="text" id="url" name="url" placeholder="Add URL" onChange={handleChange} defaultValue={accountDetail?.url} />
                        </Col>
                        <Col md={12} className='mt-10 sms-template-texterea'>
                            
                            <Label className="label-text" text="Password" />
                            <InputField
                               type="text"
                               placeholder="Password"
                               id="token"
                               name="token"
                                onChange={handleChange}
                                defaultValue={accountDetail?.password}
                            />
                           
                        </Col>
                        <Col md={6} className="mb-10">
                            <Label text="Start Time" className="labelinput"/>
                            <InputField  type="time" id="StartTime" name="StartTime" onChange={handleChange} defaultValue={accountDetail?.start_time} placeholder="HH:MM"/>
                        </Col>                        
                        <Col md={6}  className='mb-10' >
                            <Label text="Repeat Every" className="labelinput"/>
                            <InputField  type="number" id="RepeatEvery" name="RepeatEvery" onChange={handleChange} defaultValue={accountDetail?.repeat_every} placeholder="Repeat After(minuts)"/>
                        </Col>
                        <Col md={6} className="mb-10">
                            <Label className="pad-0" text="Status" htmlFor="status" />
                            <SelectField name="status" options={[{ value: 1, label: "Active"}, {value: 0, label: "Inactive"}]} />
                        </Col>
                        <Col md={12} className='text-end mt-20 mb-10 pad-0'>
                            <CustomButton className="custom-btn-outline mr-10" text="Cancel" onClick={handleClose} />
                            <CustomButton className="custom-btn-primary" onClick={handleSubmit} text="Save" />
                        </Col>
               
                </Row>
            </Form>
            </Container>
        </Offcanvas>
    );
};

export default EditAccount;
