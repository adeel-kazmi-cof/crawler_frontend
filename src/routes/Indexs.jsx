import React from "react";
import { Routes, Route } from "react-router-dom";

import '../css/style.css';
import '../css/templatetab.css';
import '../css/custom.css';
import '../css/detailPage.css';
import '../css/interview.css';
import '../css/recording.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Login from "../pages/Login";
import Register from "../components/accountSetting/Register";

import Layout from "../layout/Layout";
import Dashboard from '../pages/Dashboard';
import Logout from "../pages/Logout";
import SettingLayout from "../layout/SettingLayout";
import UserSetting from "../pages/UserSetting";
import Accounts from "../pages/Accounts";



const Indexs = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/" element={<Layout />}>
                    <Route index path="/dashboard" element={<Dashboard />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route path="users" element={<UserSetting />} />



                    <Route path="" element={<SettingLayout />} >
                        
                    </Route>
                </Route>


                <Route path="/logout" element={<Logout />} />


            </Routes>
        </>
    );
}

export default Indexs;
