import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { UserType } from "./authSlice"

// Убрать от сюда трай кетч
// Теперь мы билдим в слайсе кейсы и обрабатываем все стадии промиса и там отлавливаешь ошибку

// нужно чтобы на сервере был мидлвеир который будет обрабатывать интерцептр
// сдлеать интецептер который будет принимать токен 


export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const response = await axios.post<UserType>(`http://45.141.101.66/profile`, params)
    return response.data
})

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params) => {
    const { data } = await axios.post('http://45.141.101.66/session/login', params)

    if ('refreshToken' in data.payload) {
        window.localStorage.setItem('token', data.payload.refreshToken)
    }

    return data
})

