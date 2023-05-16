import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchRegister } from "./authCreators"


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
    extraReducers: {
        [fetchRegister.fulfilled.type]: (state, action: PayloadAction<UserType>) => {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        },
        [fetchRegister.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchRegister.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default authSlice.reducer;


