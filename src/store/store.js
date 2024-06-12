import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import accountReducer from './slices/accountSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        account: accountReducer,       
        user: userReducer        
    },
})