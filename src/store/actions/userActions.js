import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const config = require('../../config/config.json');
const API_BASE_URL = config.API_BASE_URL;

const BASE_URL = `${API_BASE_URL}/users`;

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

export const create = createAsyncThunk(
    'user/create',
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
    'user/update',
    async (payload, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }

        try {
            const { data } = await axios.put(`${BASE_URL}/${payload.profileId}`, payload.formDataFields, config)
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
    'user/getAll',
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
    'user/getById',
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

export const getProfile = createAsyncThunk(
    'user/getProfile',
    async (id, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }

        try {
            const { data } = await axios.get(`${API_BASE_URL}/profile`, config);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)


export const deleteUser = createAsyncThunk(
    'user/deleteUser',
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

export const updatePassword = createAsyncThunk(
    'user/change-password',
    async (payload, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }

        try {
            const { data } = await axios.put(`${API_BASE_URL}/change-password`, config);
            return data.users;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const accountsPermissions = createAsyncThunk(
    'users/accounts-permissions',
    async ({payload}, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }

        try {
            const { data } = await axios.put(`${API_BASE_URL}/accounts-permissions`, payload, config)
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
