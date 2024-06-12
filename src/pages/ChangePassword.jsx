import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import eye icons
import { useDispatch,useSelector } from 'react-redux';
import { Label, InputField } from '../components/form/index';
import { changePassword } from '../store/actions/authActions';
import { changepasswordfield } from "../components/accountSetting/FieldConfig";

function ChangePassword({ handleClose }) {

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track if passwords match
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
 const   [showcurrentPassword,setcurrentPassword]=useState("")
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Check if new password and confirm password match
    if (formData.newPassword !== formData.confirmPassword) {
      setPasswordsMatch(false); // Set passwordsMatch state to false
      return; // Exit function early
    }

    const payload = {
      "new_password": formData.newPassword,
      "current_password": formData.oldPassword,
    };

    dispatch(changePassword(payload))
      .then(() => {
        // Password changed successfully, you can show a success message or perform any additional actions
        console.log("Password changed successfully");
        // handleClose();
    // Close the offcanvas or perform any other action
      })
      .catch((error) => {

        console.error("Error changing password:", error);
      });
  };

 

  return (
    <Offcanvas show={true} onHide={handleClose} placement='end' className="bg-white" style={{ width: "40%" }}>
      <Row md={12} className='pad-10 header-model row-pad-0'>
        <Col md={6}><h5>Change Password</h5></Col>
        <Col className="text-end" md={6}><a href="#" className='ml-10' onClick={handleClose}><FontAwesomeIcon icon={faTimes} /></a></Col>
      </Row>

      <Offcanvas.Body className='mt-10 bg-white'>
        <Row className='row-pad-0'>
          <h1>{changePassword}</h1>
          <Col md={12} className='d-flex justify-content-center'>
            <div className='changepassword-key'>
              <FontAwesomeIcon icon={faKey} />
            </div>
          </Col>
        </Row>
        <Row className="row-pad-0 mt-20 d-flex justify-content-center">
          {changepasswordfield.map((field, index) => (
            <Col sm={12} xs={12} className='mb-10 p-relative' key={index}>
              <Label text={field.text} htmlFor={field.id} className={field.className} />
              <InputField
                type={field.type } // Toggle password visibility
                placeholder={field.placeholder}
                id={field.id}
                name={field.id}
                onChange={handleChange}
                value={formData[field.id]}
                className={field.id === 'confirmPassword' && !passwordsMatch ? 'border-danger' : ''}


              />
           
              {field.id === 'confirmPassword' && !passwordsMatch && <div className="text-danger">Passwords do not match</div>}
            </Col>
          ))}
          <Col md={12} className='text-end mt-10'>
            <Button variant="primary" onClick={handleSave}>Save</Button>
          </Col>
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ChangePassword;
