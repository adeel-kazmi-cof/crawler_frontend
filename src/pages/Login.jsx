import React, { useState, useEffect, useRef } from 'react';
import { Vidpmlogo } from "../helper/Icons/Icon";
import { Checkbox, Label, InputField, CustomButton, FeedBack } from "../components/form/index";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { loginFields } from '../components/accountSetting/FieldConfig';
import Spinner from "../components/common/Spinner";

import { login } from '../store/actions/authActions'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Changed state variable name
    let navigate = useNavigate();
    const { userToken, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userToken) {
            navigate("/dashboard");
        }
    }, [userToken, navigate]);


    const handleSubmit = (e) => {
        e.preventDefault();
        

        const payload = {
            username: data.email,
            password: data.password,

        }

        dispatch(login(payload))
            .then(() => {
                if (error) {
                    console.log('error!')
                    return
                } else {
                    navigate("/dashboard");
                    window.location.reload();
                }
            });

    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const passwordToggle = () => {
        setShowPassword(prevState => !prevState);
    }

    return (
        <Container fluid className="pad-0">
            {loading &&
                <Spinner />
            }

            <Row>
                <Col md={7} className='pad-0'>
                    <div className='logo'><b>Company Logo</b></div>
                    <div className='info-graphics'></div>
                </Col>
                <Col md={5} className="justify-content-center login-left-side  d-flex">
                    <Form onSubmit={handleSubmit} noValidate validated={validated}>
                        <Row className=" mt-30">

                            <Row className='main-heading'>
                                <Col className='text-center'><h1>Sign In</h1></Col>
                                {error &&
                                    <span className='text-center mb-10 mt-10 alert-warning'>Username or Password is incorrect. Please try again</span>
                                }
                            </Row>

                            <Row className="mb-1">
                                {loginFields.map((field, index) => (
                                    <Col md={12} className='mt-10 mb-10 p-relative' key={index}>

                                        <Label
                                            id={field.id}
                                            className={field.className}
                                            text={field.text}

                                        />
                                       
                                        <InputField
                                            type={field.type === "password" && showPassword ? "text" : field.type} // Changed input type based on showPassword state
                                            id={field.id}
                                            placeholder={field.placeholder}
                                            onChange={handleChange}
                                            name={field.name}
                                        />
                                        {field.type === "password" && ( // Conditional rendering for eye icon
                                        <span 
                                        onClick={passwordToggle} 
                                        className={`password-faEye fa fa-fw field-icon ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                                    ></span>
                                            
                                        )}
                                        {/* <FeedBack error={"test"} className={"error"} /> */}
                                    </Col>
                                ))}
                            </Row>
                            <Col className="mb-10 mt-1" md={12}>
                                <Checkbox type="checkbox" className={"check-box-label"} label={"Remember Me"} />
                            </Col>

                            <Row className="mb-10 mt-20 row-pad-0 plr-1339" >
                                <CustomButton text="Sign In" type="submit" className="custom-btn-primary" />
                            </Row>
                            <Col className='text-end col-md-12 mt-10'><span className="mr-25">Don't have an Account? <Link to="/register" className='custom-link'>Register</Link></span></Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
}

export default Login;
