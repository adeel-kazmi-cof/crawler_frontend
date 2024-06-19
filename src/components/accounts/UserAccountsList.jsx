import React, { useState, useEffect } from "react";
import { Table, Row, Col, Offcanvas, Container, Form, Button } from "react-bootstrap"; // Assuming you are using react-bootstrap
import { eye, pencil, sms, crossicon } from "../../helper/Icons/Icon";
import { Checkbox, CustomButton } from '../form';
import Spinner from "../common/Spinner";
import * as moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getAll } from '../../store/actions/accountActions';
import { update, getById, accountsPermissions } from "../../store/actions/userActions";

const UserAccountsList = ({ handleClose, profileId }) => {
    const dispatch = useDispatch();
    const [accountId, setAccountId] = useState()
    let [selectedAccounts, setSelectedAccounts] = useState([])

    const { accounts, loading, error } = useSelector((state) => state.account);
    const { userDetail } = useSelector((state) => state.user);

    useEffect(() => {
        let data = {
            'limit': 25, 'page': 1
        }
        dispatch(getAll(data));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getById(profileId));
      }, [dispatch]);

    const selectAllAccounts = (state) => {
        console.log(state);
        if(state == true){
            for (let i = 0; i < accounts.length; i++) {
                if(!selectedAccounts.includes(accounts[i].id))
                    selectedAccounts.push(accounts[i].id)
            }
        } else {
            selectedAccounts = [];
        }
        console.log(selectedAccounts);
       
    }
    const handleSelectedAccounts = (id) => {
        if(!selectedAccounts.includes(id))
            selectedAccounts.push(id);   
        else {
            selectedAccounts = selectedAccounts.filter(item => item !== id);
        }
        console.log(selectedAccounts);
        console.log(selectedAccounts.includes(id));
    }
    const isItemSelected = () => {

        return selectedAccounts.includes(accountId);
    }
    
    console.log(selectedAccounts);
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
    const payload= {
        user_id: profileId,
        accounts_permissions: selectedAccounts.toString()
    } 
    console.log(payload);
    dispatch(accountsPermissions({payload}))
      .then(() => {
        handleClose();
        return sweetAlert("success", "Success!", "User edited successfully!");
      })
      .catch((error) => {
        return sweetAlert("error", "Error!", "Something went wrong!");
      });
    };
    return (
        <Offcanvas show={true} onHide={handleClose} placement="end" className="bg-ligte-gray custom-offcanvas" style={{ width: "50%" }}>
            <Offcanvas.Header className="model-header bg-white actionlist-header ">
                <Offcanvas.Title>
                    <span className="svg">{sms}</span> Select Accounts for User
                </Offcanvas.Title>
                <div className="text-end">
                    <CustomButton onClick={handleClose} className="text-end close-btn " text={crossicon} />
                </div>
            </Offcanvas.Header>
            <Container fluid className="pad-10">
                {loading && <Spinner /> }
                <Col md={12} className='text-end mt-20 mb-10 pad-0'>
                    <CustomButton className="custom-btn-outline mr-10" text="Cancel" onClick={handleClose} />
                    <CustomButton onClick={handleSubmit} type="button" className="custom-btn-primary" text="Save" />
                </Col>
                <div className="oveflow-auto mt-20">

                    <Table className="tabel" >

                        <thead>
                            <tr>
                                <th style={{ width: "20px" }}>
                                    <Checkbox
                                    onClick={(e) => selectAllAccounts(e.target.checked)}
                                    id="selectAllAcc"
                                    />
                                </th>
                                <th style={{ minWidth: "100px", width: "200px" }} className="th-text">Account Name</th>
                                <th style={{ minWidth: "100px", width: "200px" }} className="th-text">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts &&
                                accounts.map(item => {
                                    return (
                                        <tr>
                                            <td className="cursor td-icon" >
                                                <Checkbox 
                                                name="accounts[]" 
                                                onChange={(e) => handleSelectedAccounts(e.target.value)}
                                                defaultChecked={selectedAccounts.includes(item.id)}
                                               // checked={selectedAccounts.includes(item.id)}
                                                value={item.id} /> {selectedAccounts.includes(item.id)}
                                            </td>
                                            <td className="td-text">{item.account_name}</td>
                                            <td className="td-text text-ellipsis">
                                                <CustomButton 
                                                    className={item.status == 1 ?"statusActive":"statusInactive"} 
                                                    text={item.status == 1 ?"Active":"Inactive"}
                                                 />
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </Offcanvas>
    );
};

export default UserAccountsList;