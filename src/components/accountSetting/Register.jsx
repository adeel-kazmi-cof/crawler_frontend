
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { Vidpmlogo } from "../../helper/Icons/Icon";
import { Checkbox, Label,InputField, CustomButton } from "../form/index";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { fieldConfiregister } from "./FieldConfig";
import { create } from '../../store/actions/userActions'
import Swal from 'sweetalert2';

const  Register=()=> {
    const navigate=useNavigate()

    const [formData, setFormData] = useState({})
    const dispatch=useDispatch();
    const {userDetail,loading,error}=useSelector((state)=>state.user);

    const TextButtom = "Sign In";
    const BtnBlueClass = "BtnBlueClass";
    const crlcheckbox="check-box-label";
    const labeltext="Remember Me";
    const sitekey="YOUR_RECAPTCHA_SITE_KEY"
    
    const handleForm=()=>{
      let payload = {        
        "fullName":formData.fullName,
        "username": formData.username,
        "email": formData.email,
        "phone":formData.phoneNumber,
        "password":formData.password,
       // "role_id": formData.user_role,
      }
      console.log(payload);
      return;
    // add user api
      dispatch(create(payload)).then(() => {
      //handleClose();
                  
                  Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Registered Successfully!",
                    showConfirmButton: false,
                    timer: 1000
                });
                
              }).catch((error) => {

                  Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 1000
                });
              });
          //  navigate("/dashboard")

    }

  
   
  return (
    <>
      <Container fluid className="pad-0">
         <Row>
        <Col md={7} className='pad-0'>
           
           <div  className='logo'>Company Name</div>
             <div className='info-graphics'></div>
           </Col>
           <Col md={5} className="justify-content-center register-left-side  d-flex">
             <Form>
             <Row className="">
                  <Col className="" md={12}><p className='accountSetting-p'  >New Registration!</p></Col>
                  <span className='accountSetting-span mt-10'>You are almost there.Set your Informaton and you're all set</span>
              
                <Row className="mb-10 mt-10">
            { fieldConfiregister.map((config, index) => (
                      <Col md={12} className="mt-10 mb-10" key={index}>
         
                <Label
                  HtmlFor={config.id}
                  className={config.className}
                  text={config.text}
                />
                <InputField  
                type={config.type}
                 id={config.id}
                 name={config.name}
                 placeholder={config. placeholder} />
              
              </Col> 
            ))}

</Row>  
{/* <Col className="mb-10 mt-20" sm={12}>
                 <CustomCheckbox  crlcheckbox={crlcheckbox} labeltext={labeltext}/>
                </Col>
                    <Col className="mb-10 mt-20" sm={12}>
                    <CustomRecaptcha sitekey={sitekey} />
                </Col> */}
                <Col className="mb-10 mt-20" >
                <CustomButton text={TextButtom} className={BtnBlueClass} onClick={()=>handleForm()} />
                </Col>
            </Row>
              </Form>
            </Col>
            </Row>
      </Container>
    </>
  );
}

export default Register;
