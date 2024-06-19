import { Button, Row, Col, Form, Offcanvas } from "react-bootstrap";
import users from "../../assets/images/users.png";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useLayoutEffect } from "react";
import { CustomButton, InputField, Label } from "../form";
import { attachment, crossicon, adduser } from "../../helper/Icons/Icon";
import { update, getById } from "../../store/actions/userActions";
import Swal from "sweetalert2";
const EditUser = ({ handleClose, profileId }) => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { userDetail, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getById(profileId));
  }, [dispatch]);
  useLayoutEffect(() => {
    formData["firstName"] = userDetail?.fname;
    formData["lastName"] = userDetail?.lname;
    formData["email"] = userDetail?.email;
    formData["address"] = userDetail?.address;
    formData["city"] = userDetail?.city;
    formData["state_name"] = userDetail?.state_name;
    formData["zipcode"] = userDetail?.zip_code;
    formData["country_name"] = userDetail?.country;
    formData["phoneNumber"] = userDetail?.phone;
    formData["user_role"] = userDetail?.role_id;
  }, [userDetail]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  };
  const sweetAlert = (type, title, text) => {
    Swal.fire({
      icon: type,
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1000,
    });
  };
  const EditUserSubmit = () => {
    let formDataFields = {
      fname: formData.firstName,
      lname: formData.lastName,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      state_name: formData.state_name,
      zip_code: formData.zipcode,
      country: formData.country_name,
      phone: formData.phoneNumber,
      role_id: formData.user_role,
      
    };

    // add user api
    dispatch(update({profileId, formDataFields}))
      .then(() => {
        handleClose();
        return sweetAlert("success", "Success!", "User edited successfully!");
      })
      .catch((error) => {
        return sweetAlert("error", "Error!", "Something went wrong!");
      });
  };

  // update user

  return (
    <>
      <Offcanvas
        show={true}
        onHide={handleClose}
        placement="end"
        className="bg-ligte-gray custom-offcanvas"
        style={{ width: "60%" }}
      >
        <Offcanvas.Header className="model-header bg-white ">
          <Offcanvas.Title>
            <span className="svg mr-10">{adduser}</span>Edit User
          </Offcanvas.Title>
          <div className="text-end">
            <CustomButton
              onClick={handleClose}
              className="text-end close-btn "
              text={crossicon}
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="mt-10">
          <Col md={12} className="add-user-wrap">
            <Row className=" row-pad-0  radius-5 bg-white  pad-10">
              <Row className="row-pad-0 mt-10">
                <Col md={6} className="mb-10">
                  
                      <Label text="Full Name" className="labelinput" />
                      <InputField
                        type="text "
                        id="fullName"
                        name="fullName"
                        onChange={handleChange}
                        placeholder="Enter name"
                        defaultValue={userDetail?.fname}
                      />
                    
                </Col>
                
                <Col md={6} className="mb-10">
                  <Label text="Email" className="labelinput" />
                  <InputField
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    defaultValue={userDetail?.email}
                    placeholder="Enter your email address"
                  />
                </Col>
                <Col md={12} className="mb-10">
                  <Label text="Phone Number" className="labelinput" />
                  <InputField
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                    defaultValue={userDetail?.phone}
                    placeholder="Enter your phone number"
                  />
                </Col>
                
                
                <Col md={12} className="text-end mt-20 mb-20">
                  <CustomButton
                    text="Cancel"
                    onClick={handleClose}
                    className="custom-btn-outline mr-10"
                  />
                  <CustomButton
                    text="Save"
                    onClick={EditUserSubmit}
                    className="custom-btn-primary"
                  />
                </Col>
              </Row>
            </Row>
          </Col>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default EditUser;
