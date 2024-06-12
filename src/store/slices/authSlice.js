import { createSlice } from '@reduxjs/toolkit'
import { login, logout,changePassword } from '../actions/authActions'

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    loading: false,
    userToken,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.userInfo = action.payload
                state.userToken = action.payload.userToken
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            builder
            .addCase(changePassword.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.loading = false
                state.userInfo = action.payload
           
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

        builder
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false
                state.userToken = null
            })
    },
})

export default authSlice.reducer