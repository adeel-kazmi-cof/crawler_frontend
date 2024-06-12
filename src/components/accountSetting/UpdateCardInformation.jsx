
import { Button,Row,Col, Form ,Offcanvas,Container} from 'react-bootstrap';

import { CustomButton, InputField, Label } from '../form';
import CustomSelect from "../common/CustomSelect";
import { crossicon } from '../../helper/Icons/Icon';
const  UpdateCardInformation=({handleClose})=>{
    return(
        <>
           <Offcanvas show={true} onHide={handleClose} placement="end" className="bg-ligte-gray  custom-offcanvas" style={{ width: "50%" }}>
              
            
           <Container fluid className=" pad-20 svg-wrap-20">
      <Offcanvas.Header className="model-header bg-white m-0 actionlist-header ">
            <Offcanvas.Title>Update Card</Offcanvas.Title> 
           <div className="text-end"><CustomButton onClick={handleClose} className="text-end close-btn " text={crossicon} /></div> 
          </Offcanvas.Header>
        <Col md={12} >
        <Row className=" row-pad-0  mt-20 radius-5 bg-white  pad-10">
            
           <h4 className='mb-10'>Billing Details</h4>
         
                <Col md={6} className='mb-10'>
                <Label text="First Name" className="label"/>
                    <InputField  type="text "  placeholder="Enter first name"/>
                </Col>
                <Col md={6} className='mb-10'>
                <Label text="Last Name" className="labelinput"/>
                <InputField  type="text "  placeholder="Enter first name"/>
                </Col>
                
           
            <Col md={12} className='mb-10'>
            <Label text="Address" className="label"/>
            <InputField  type="text "  placeholder="Enter address"/>
                 
            </Col>



            <Col md={6} className='mb-10'>
            <Label text="City" className="labelinput"/>
            <CustomSelect  
    option={[
        {
            id: 1,
            name: "Select city"
        },
        {
            id: 2,
            name: "USA"
        }
    ]}
/>

                    
            </Col>
            <Col md={6} className='mb-10'>
            <Label text="State" className="labelinput"/>
            <CustomSelect  
    option={[
        {
            id: 1,
            name: "Select state"
        },
        {
            id: 2,
            name: "USA"
        }
    ]}
/>
            </Col>
            <Col md={6} className='mb-10'>
            <Label text="Country" className="labelinput"/>
            <CustomSelect  
    option={[
        {
            id: 1,
            name: "Select country"
        },
        {
            id: 2,
            name: "USA"
        }
    ]}
/>
            </Col>
            <Col md={6} className='mb-10'>
            <Label text="Zip Code" className="labelinput"/>
                    <InputField  type="text "  placeholder="00000"/>
            </Col>
            
         
              
        
            <Col md={12} className='mb-10  mt-15'> <h4>Payment Details</h4>   </Col>
                <Col md={12} className='mb-10 '>
                <Label text="Card Number" className="labelinput"/>
                <InputField  type="text "  placeholder="Enter card number"/>
                </Col>
                <Col md={6} className='mb-10  '>
            <Label text="Expiration Date" className="labelinput"/>
            <InputField  type="date"  placeholder=""/>
            </Col>
            <Col md={6} className='mb-10  '>
            <Label text="CVC" className="labelinput"/>
            <InputField  type="text"  placeholder="000"/>
            </Col>
                   
        
              
           
           
          
          
          
            
<Col md={12}  className="text-end mt-20 mb-20">
    <CustomButton text="Cancel" onClick={handleClose} className="custom-btn-outline mr-10"/>
    <CustomButton text="Save"  onClick={handleClose} className="custom-btn-primary" />
</Col>
          </Row>

           
   

        </Col>
        </Container>
        </Offcanvas>
        </>
    )
}


export default UpdateCardInformation;