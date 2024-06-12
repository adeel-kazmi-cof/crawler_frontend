import { React, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/authActions'
import { useNavigate } from "react-router-dom";
import Spinner from "../components/common/Spinner";

const Logout = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { loading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(logout());
        navigate("/login");
    }, [dispatch, navigate]);

    return (<>
        {loading &&
            <Spinner />
        }

        <div className="text-center mt-20">
            <h1>Logout </h1>
        </div>
    </>)
}

export default Logout;