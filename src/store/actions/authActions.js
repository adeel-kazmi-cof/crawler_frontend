import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const config = require('../../config/config.json');
const API_BASE_URL = config.API_BASE_URL;
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null


export const login = createAsyncThunk(
    'auth/login',
    async (payload, thunkAPI) => {

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, payload, config)
            localStorage.setItem('userToken', data.accessToken)
            return data

        } catch (error) {
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data)
            } else {
                return thunkAPI.rejectWithValue(error.response.data.message)
            }

        }
    }
)


export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        localStorage.clear()
    }
)



export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async (payload, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }

        try {
            const { data } = await axios.put(`${API_BASE_URL}/change-password`, payload, config);
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

