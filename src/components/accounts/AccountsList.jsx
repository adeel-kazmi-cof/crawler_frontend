import React, { useState, useEffect } from "react";
import { Table, Col, Row, Form, Button } from "react-bootstrap"; // Assuming you are using react-bootstrap
import { eye, pencil, deletclrred } from "../../helper/Icons/Icon";

import Spinner from "../common/Spinner";
import * as moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import ViewAccount from "./ViewAccount";
import EditAccount from "./EditAccount";
import Swal from 'sweetalert2';
import Paginate from "../common/Paginate";
import { getAll, getById, deleteAccount } from '../../store/actions/accountActions'

const SmsTemplateList = ({ addSmsTemplate }) => {
    const dispatch = useDispatch();
    const [accountId, setAccountId] = useState()
    const [showDetail, setShowDetail] = useState(false);
    const [editAccount, setEditAccount] = useState(false);
    const [deletej, setDeletej] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(25);

    const { accounts, loading, error } = useSelector((state) => state.account);
    let pages = accounts.pages;
    let totalPages = accounts.total_page;
    let totalRecords = accounts.total_record;

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

    const handleModel = (id, view) => {
        setAccountId(id)
        if (view == "view")
            setShowDetail(!showDetail);
        else if(view == "edit"){
            dispatch(getById(id));
            setEditAccount(!editAccount);
        }
    }
console.log(accounts);
    const handleDelete = (accountId) => {
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
                dispatch(deleteAccount(accountId))
                    .then(() => {
                        setDeletej(true)

                        Swal.fire({
                            icon: 'success',
                            title: 'Deleted',
                            text: 'Account has been deleted.',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    });
            }

            setDeletej(false)
        });
    };
    return (
        <>
            {loading &&
                <Spinner />
            }

            <div className="oveflow-auto mt-20">
                <Table className="tabel" >

                    <thead>
                        <tr>
                            <th style={{ width: "20px" }} className="th-icon"><i className="fa fa-ellipsis-v" title="Quick Action"></i></th>
                            <th style={{ width: "20px" }} className="th-text">Detail</th>
                            <th style={{ width: "20px" }} className="th-text">Edit</th>
                            <th style={{ width: "20px" }} className="th-text">Delete</th>
                            <th style={{ minWidth: "100px", width: "200px" }}>Account Name</th>
                            <th style={{ minWidth: "100px", width: "260px" }}><span>User</span></th>
                            <th style={{ minWidth: "100px", width: "200px" }}><span>URL</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts &&
                            accounts.map(item => {
                                return (
                                    <tr>
                                        <td className="cursor td-icon" ><i className="fa fa-ellipsis-v" ></i></td>
                                        <td className="quick-action td-icon" onClick={() => handleModel(item.id, "view")} > <span >{eye}</span></td>
                                        <td className="quick-action td-icon" onClick={() => handleModel(item.id, "edit")} > <span>{pencil}</span></td>
                                        <td className="quick-action td-icon" > <span onClick={() => handleDelete(item.id)}>{deletclrred}</span></td>
                                        <td className="td-text">{item.account_name}</td>
                                        <td className="td-text">{item.user_name}</td>
                                        <td className="td-text text-ellipsis">{item.url}</td>
                                    </tr>
                                )
                            }
                            )
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
            { editAccount && <EditAccount accountId={accountId} handleClose={() => handleModel(accountId, "edit")} />}
            { showDetail && <ViewAccount accountId={accountId} handleClose={() => handleModel(accountId, "view")} />}
        </>
    );
};

export default SmsTemplateList;