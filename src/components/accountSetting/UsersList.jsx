import React, { useState, useEffect } from "react";
import { Row, Col, Dropdown, Table, Form, Button } from "react-bootstrap";
import { CustomButton } from "../../components/form";
import UserAccountsList from "../../components/accounts/UserAccountsList";
import { pencil, timer, time, usercircle } from '../../helper/Icons/Icon';
import usersIcong from '../../assets/images/users.png';
import Profile from "../../pages/Profile";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import Spinner from "../common/Spinner";
import * as moment from 'moment'
import { getAll, deleteUser } from '../../store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
import Paginate from "../common/Paginate";
import Swal from 'sweetalert2';

const UsersList = () => {
    const dispatch = useDispatch();
    const [showProfile, setProfile] = useState(false)
    const [profileId, setProfileId] = useState(false)
    const [showAdduser, setAdduser] = useState(false);
    const [showEditUser, setEditUser] = useState(false);
    const [showUserAccountsList, setUserAccountsList] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(25);

    const [deletej, setDeletej] = useState(false);
    const [userIds, setUserIds] = useState([]);

    const { users, loading, error } = useSelector((state) => state.user);
    let userList = users;
    let pages = users.pages;
    let totalPages = users.total_page;
    let totalRecords = users.total_record;
    console.log(users);
    useEffect(() => {
        let data = {
            'limit': perPage, 'page': currentPage
        }
        dispatch(getAll(data));
    }, [dispatch, deletej, currentPage, perPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePerPage = (perPage) => {
        setPerPage(perPage);
    };

    const handleModel = (type, id) => {
        setProfileId(id)
        if (type == "profile") {
            setProfile(!showProfile)
        }
        else if (type == "adduser") {
            setAdduser(!showAdduser)
        } else if (type == "edituser") {
            setEditUser(!showEditUser)
        } else if (type == "selectAccounts") {
            setUserAccountsList(!showUserAccountsList)
        }

    }

    const handleSelectAllChange = (e) => {
        if (e.target.checked) {
            setUserIds(userList.map(user => user.id));
        } else {
            setUserIds([]);
        }
    };

    const handleCheckboxChange = (id) => {
        setUserIds(prevSelectedItems => {
            if (prevSelectedItems.includes(id)) {
                return prevSelectedItems.filter(itemId => itemId !== id);
            } else {
                return [...prevSelectedItems, id];
            }
        });
    };

    const deleteMsg = () => Swal.fire({
        icon: 'success',
        title: 'Deleted',
        text: 'Item(s) has been deleted.',
        showConfirmButton: false,
        timer: 1000
    });

    const handleDelete = (userId = false) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Are you sure to delete the selected item(s).',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                if (userId) {
                    dispatch(deleteUser(userId))
                        .then(() => {
                            setDeletej(true)
                            deleteMsg();

                        });
                } else {
                    var FormData = require('form-data');
                    var data = new FormData();
                    userIds.forEach((value, index) => {
                        data.append(`ids[${index}]`, value);
                    });

                    //dispatch(deleteUsers(data))
                
                        // .then(() => {
                        //     setDeletej(true)
                        //     setUserIds([]);
                        //     deleteMsg();
                        // });
                }
            }
        });

        setDeletej(false)
    };

    return (
        <>
            {loading &&
                <Spinner />
            }

            <div className="oveflow-auto">
                <Table className="tabel" style={{}}>

                    <thead>
                        <tr>
                            <th style={{ width: "15px" }} className="th-icon"><i className="fa fa-ellipsis-v" title="Quick Action"></i></th>
                            <th style={{ minWidth: "100px", width: "200px" }} className="th-text">Quick Actions</th>

                            <th style={{ minWidth: "100px", width: "200px" }} className="th-text">Full Name</th>
                            <th style={{ minWidth: "100px", width: "260px" }} className="th-text"><span>Status</span></th>

                            <th style={{ minWidth: "100px", width: "200px" }} className="th-text"><span>Role</span></th>
                            <th style={{ minWidth: "100px", width: "200px" }} className="th-text"><span>Email</span></th>

                            <th style={{ minWidth: "100px", width: "200px" }} className="th-text"><span>Phone Number</span></th>

                        </tr>
                    </thead>
                    <tbody >
                        {userList &&
                            userList.map(user => {
                                return (

                                    <tr key={user.id}>
                                        <td className="cursor td-icon" ><i className="fa fa-ellipsis-v" title="Quick Action"></i></td>

                                        <td className="quick-action td-icon" >
                                            {/* <span><i class="fa fa-share-alt"></i>   </span> */}
                                            <span onClick={() => handleModel("edituser", user.id)}>{pencil}</span>
                                            <span onClick={() => handleModel("profile", user.id)}>
                                                <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={usersIcong} alt="Cricket" className="img-fluid" />
                                            </span>
                                            <span className="ml-10" onClick={() => handleModel("selectAccounts", user.id)}>
                                                {time}
                                            </span>
                                            
                                        </td>

                                        <td className="td-text"> {user.full_name}</td>

                                        <td className="td-text">
                                            <CustomButton className="statusActive" text="Active" />
                                        </td>
                                        <td className="td-text">Admin</td>
                                        <td className="td-text">
                                            <a href="mailto:{user.email}" target="_blank">{user.email}</a>
                                        </td>
                                        <td className="td-text">{user.phone}</td>


                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

                <Paginate
                    pages={pages}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    perPage={perPage}
                    totalRecords={totalRecords}
                    handlePageChange={handlePageChange}
                    handlePerPage={handlePerPage}
                />

            </div>

            {showProfile && <Profile profileId={profileId} handleClose={() => handleModel("profile")} />}
            {showAdduser && <AddUser handleClose={() => handleModel("adduser")} />}
            {showEditUser && <EditUser profileId={profileId} handleClose={() => handleModel("edituser")} />}
            {showUserAccountsList && <UserAccountsList profileId={profileId} handleClose={() => handleModel("selectAccounts")} />}
        </>
    )
}

export default UsersList;