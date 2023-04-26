import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPersonBackend } from "shared/types/IPersonBackend"
import { fetchActor } from "./ActionCreators"

interface UserState {
    actor: IPersonBackend
    isLoading: boolean
    error: string
}



const initialState: UserState = {
    actor: {} as IPersonBackend,
    isLoading: false,
    error: ''
}


export const actorSlice = createSlice({
    name: 'actor',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchActor.fulfilled.type]: (state, action: PayloadAction<IPersonBackend>) => {
            state.isLoading = false
            state.error = ''
            state.actor = action.payload
        },
        [fetchActor.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchActor.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default actorSlice.reducer;




