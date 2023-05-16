import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { UserType } from "./authSlice"




export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params, thunkAPI) => {
    try {
        const response = await axios.post<UserType>(`http://45.141.101.66/profile`, params)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue("Не удалось получить пользователей")
    }
})

