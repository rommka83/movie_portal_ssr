import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchRegister, fetchUserData } from "./authCreators"
import { RootState } from "../store"


export type UserType = {
    name: string
    email: string
    password: string
    surname: string
    phoneNumber: string
    selfDescription: string
} | null



interface ProfileType {
    data: UserType
    isLoading: boolean
    error: string
}



const initialState: ProfileType = {
    data: null,
    isLoading: false,
    error: ''
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.data = action.payload
            })
            .addCase(fetchRegister.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error as string
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.data = action.payload
            })
            .addCase(fetchUserData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.isLoading = false
                state.error = 'Не верный логин или пароль'
            })
    }
    // extraReducers: {
    // [fetchRegister.fulfilled.type]: (state, action: PayloadAction<UserType>) => {
    // state.isLoading = false
    // state.error = ''
    // state.data = action.payload
    // },
    // [fetchRegister.pending.type]: (state) => {
    // state.isLoading = true
    // },
    // [fetchRegister.rejected.type]: (state, action: PayloadAction<string>) => {
    // state.isLoading = false
    // state.error = action.payload
    // }
    // }
})

export const selectIsAuth = (state: RootState) => Boolean(state.authSlice.data)

export default authSlice.reducer;


