
import { Button,Row,Col, Form ,Offcanvas} from 'react-bootstrap';
import users from '../../assets/images/users.png';
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { CustomButton, InputField, SelectField, Label } from '../form';
import { attachment ,crossicon,adduser} from '../../helper/Icons/Icon';
import { create ,update,getById} from '../../store/actions/userActions';
import Swal from 'sweetalert2';
const AddUser=({handleClose,profileId})=>{

    const [formData, setFormData] = useState({})
    const dispatch=useDispatch();
    const {userDetail,loading,error}=useSelector((state)=>state.user)
 
   
    const handleChange= (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
    const AdduserSubmit=()=>{
    
 
        
        let payload = {
         
            "full_name":formData.fullName,
            "email": formData.email,
            "phone":formData.phoneNumber,
            "password":formData.password,
            "role_id": formData.user_role,
        }

        // add user api
   dispatch(create(payload)).then(() => {
    handleClose();
                return sweetAlert(
                    "success",
                    "Success!",
                    "User added successfully!",
                )
              
            }).catch((error) => {
    
                return sweetAlert(
                    "error",
                    "Error!",
                    "Something went wrong!"
                )
            });
       

    }

    // update user 
   
    return(
        <>

<Offcanvas show={true} onHide={handleClose} placement='end' className="bg-ligte-gray custom-offcanvas" style={{width:"60%"}}  >
    <Offcanvas.Header className="model-header bg-white ">
            <Offcanvas.Title><span className="svg mr-10">{adduser}</span>Add User</Offcanvas.Title> 
           <div className="text-end"><CustomButton onClick={handleClose} className="text-end close-btn " text={crossicon} /></div> 
          </Offcanvas.Header>
      <Offcanvas.Body  className='mt-10'>
        <Col md={12} className='add-user-wrap'>
        <Row className=" row-pad-0  radius-5 bg-white  pad-10">
            

          <Row className="row-pad-0 mt-10">
            <Col md={6}  className='mb-10' >
                <Label text="Full Name" className="labelinput"/>
                <InputField  type="text " id="fullName" name="fullName"   onChange={handleChange}  placeholder="Enter Name"/>
            </Col>
            <Col md={6} className="mb-10">
                <Label className="pad-0" text="Select Role" htmlFor="role_id" />
                <SelectField name="role_id" options={[{ value: 1, label: "User" }, { value: 2, label: "Admin" }]} />
            </Col>
            <Col md={6} className='mb-10'>
            <Label text="Email" className="labelinput"/>
                    <InputField  type="email" id="email" name="email"  onChange={handleChange}   placeholder="Enter your email address"/>
            </Col>
            <Col md={6} className='mb-10'>
            <Label text="Phone Number" className="labelinput"/>
                    <InputField  type="tel"  id="phoneNumber" name="phoneNumber" onChange={handleChange}  placeholder="Enter your phone number"/>
            </Col>
            <Col md={6} className='mb-10'>
            <Label text="Password" className="labelinput"/>
                    <InputField  type="password" id="password" name="password"  onChange={handleChange}  placeholder="Enter password"/>
            </Col>
            <Col md={6} className='mb-10'>
            <Label text="Confirm Password" className="labelinput"/>
                    <InputField  type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange}  placeholder="Confirm password"/>
            </Col>
            
<Col md={12}  className="text-end mt-20 mb-20">
    <CustomButton text="Cancel" onClick={handleClose} className="custom-btn-outline mr-10"/>
    <CustomButton text="Save" onClick={AdduserSubmit} className="custom-btn-primary" />
</Col>
          </Row>

           
   
</Row>

        </Col>
      
        
        </Offcanvas.Body>
    

   
    </Offcanvas>
    
        </>
    )
}

export default AddUser;