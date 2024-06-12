import { createSlice } from '@reduxjs/toolkit'
import { create, update, getAll, getById, deleteUser, getProfile, updatePassword } from '../actions/userActions'


const initialState = {
    loading: false,
    users: [],
    userDetail: [],
    userProfile: null,
    usersRoles:[],
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(create.pending, (state, action) => {
                state.loading = true
            })
            .addCase(create.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(create.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(update.pending, (state, action) => {
                state.loading = true
            })
            .addCase(update.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(update.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(getById.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false
                state.userDetail = action.payload
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(getProfile.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false
                state.userProfile = action.payload
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(deleteUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(updatePassword.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            
    },
})

export default userSlice.reducer