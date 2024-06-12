import React, { useState } from "react";
import { Table, Col, Row, Form, Button } from "react-bootstrap";
import AddAccount from "../components/accounts/AddAccount";
import { CustomButton } from "../components/form";
import AccountsList from "../components/accounts/AccountsList";

const Accounts = () => {

    const [addAccount, setAddAccount] = useState(false);

    const handleModel = () => {
        setAddAccount(!addAccount)
    }

    return (<>
        <Row className="listing-section row-pad-0 bg-white " >
            <Row className="row-pad-0">
                <Col md={6}>
                    <h5 className="mt-15">Accounts </h5>
                </Col>
                <Col className="text-end pad-0 mt-10 mb-10">

                    <CustomButton className="custom-btn-outline ml-10" onClick={() => handleModel("account")} text="Add Account" />
                </Col>

                <span className="single-border d-block"></span>
            </Row>

            <AccountsList addAccount={addAccount} />

            { addAccount && <AddAccount handleClose={() => handleModel()} /> }
        </Row>
    </>
    );
};




export default Accounts;