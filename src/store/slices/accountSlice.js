import { createSlice } from '@reduxjs/toolkit'
import { create, update, getAll, getById, deleteAccount } from '../actions/accountActions'

const initialState = {
    loading: false,
    accounts: [],   
    accountDetail: null,
    error: null,
}

const companySlice = createSlice({
    name: 'company',
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
                state.accounts = action.payload
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
                state.accountDetail = action.payload
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(deleteAccount.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteAccount.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(deleteAccount.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            
            
    },
})

export default companySlice.reducer