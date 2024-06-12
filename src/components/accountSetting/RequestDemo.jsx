import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Vidpmlogo } from '../../helper/Icons/Icon';
import { Checkbox, Label,InputField, CustomButton,CustomFlags,FeedBack } from "../form/index";
import { useNavigate } from 'react-router-dom';
import { fieldConfigRequestdemo } from './FieldConfig';



function Requestdemo() {

  const navigate=useNavigate();
 
 
  const crlcheckbox="check-box-label";
  const labeltext="Remember Me";

  const btntext = "Request a Demo";


  const sitekey="YOUR_RECAPTCHA_SITE_KEY"

  const handleFlagSelect = (countryCode) => {
    console.log(`Selected country: ${countryCode}`);
    // Add your custom logic here
  };



  const FormRequestdemo=()=>{

    navigate("/template")

  }
  


  return (
    <>
      <Container fluid className='pad-0'>
        <Row className='row-pad-0'>
          <Col md={6} className='pad-0'>
          <div  className='logo'>{ Vidpmlogo}</div>
            <div className='info-graphics'></div>
          </Col>

          <Col md={6} className='justify-content-center requestdemo-left d-flex'>
            <Form>
              <Row className='row-pad-0'>
               <Col md={12}><p className='accountSetting-p' >Recruit Smarter, Not Harder: Start Interviewing in <br/>Style!</p>
                  <span className='accountSetting-span'>Recruit Smarter, Not Harder: Start Interviewing in Style to elevate your hiring game with finesse</span>
             </Col>   
                <Row className="mb-10 mt-20">
                {fieldConfigRequestdemo.map((field, index) => (
  <Col md={6} xs={12} className='mb-10 mt-10' key={index}>
    <Label
  htmlFor={field.id}
      className={field.className}
      text={field.text}
    />
    {field.text && field.text.toLowerCase() === 'phone number' && (
      <div className='custom-flag-wrapper'>
        <CustomFlags countryCode="US" onSelect={handleFlagSelect} />
        <InputField
          type={field.type}
          id={field.id}
          name={field.name}
          placeholder={field.placeholder}
        />
     
      </div>
    )}
    {field.text && field.text.toLowerCase() !== 'phone number' && (
      <InputField
        type={field.type}
        id={field.id}
        placeholder={field.placeholder}
      />
 
    )}
       <FeedBack className="error"  error="At least one character"/>
  </Col>
))}


          
    <Col className="mb-10 mt-1" sm={12}>
                 <Checkbox type="checkbox"  className={crlcheckbox} label={labeltext}/>
                </Col>
                


                <Col className="mb-10 mt-20" >

                <CustomButton   text={btntext } className=""  onClick={()=>FormRequestdemo()}  />
                </Col>
                </Row>
              

              

              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Requestdemo;
