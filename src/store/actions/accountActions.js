import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const config = require('../../config/config.json');
const API_BASE_URL = config.API_BASE_URL;


const BASE_URL = `${API_BASE_URL}/accounts`;

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

export const create = createAsyncThunk(
    'account/create',
    async (payload, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }

        

        try {
            const { data } = await axios.post(`${BASE_URL}`, payload, config)
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


export const update = createAsyncThunk(
    'account/update',
    async (payload, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }

        try {
            const { data } = await axios.put(`${BASE_URL}/${payload.accountId}`, payload, config)
            return data;
        } catch (error) {
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data)
            } else {
                return thunkAPI.rejectWithValue(error.response.data.message)
            }
        }
    }
)


export const getAll = createAsyncThunk(
    'account/getAll',
    async (payload, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
            params: payload
        }

        try {
            const { data } = await axios.get(`${BASE_URL}`, config)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const getById = createAsyncThunk(
    'account/getById',
    async (id, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }

        try {
            const { data } = await axios.get(`${BASE_URL}/${id}`, config);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)


export const deleteAccount = createAsyncThunk(
    'account/deleteAccount',
    async (id, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }

        try {
            const { data } = await axios.delete(`${BASE_URL}/${id}`, config);
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)



