import { useState } from "react";
import { Row, Col, Dropdown, Table, Form, Button } from "react-bootstrap";
import { JobActive, deletegray, exporticon, adduser, shareeye, pencil, timer, time, usercircle } from "../helper/Icons/Icon";
import AddUser from "../components/accountSetting/AddUser";
import UsersList from "../components/accountSetting/UsersList";

const UserSetting = () => {

    const [showadduser, setadduser] = useState(false);
    const adduserModel = () => {
        setadduser(!showadduser)
    }
    return (
        <>

            <Row className="listing-section  row-pad-0 bg-white" >
                <Row className="row-pad-0">
                <Col md={6}>
                    <h5 className="mt-15">Users</h5>
                </Col>
                <Col className="text-end pad-0 mt-10 mb-10">
                    <Button className="custom-btn-outline mr-15" onClick={adduserModel}>{usercircle} Add User</Button>
                </Col>

                <span className="single-border d-block"></span>
            </Row>
                <UsersList />
            </Row>

            {showadduser && < AddUser handleClose={adduserModel} />}
        </>)
}

export default UserSetting;