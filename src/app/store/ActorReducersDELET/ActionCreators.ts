import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPersonBackend } from "shared/types/IPersonBackend";


export const fetchActor = createAsyncThunk('actor/fetchActor', async (id: string, thunkAPI) => {
    try {
        const response = await axios.get<IPersonBackend>(`https://api.kinopoisk.dev/v1/person/${id}?token=PZQK66P-MP6MTV9-MMNQB95-S4P3NH9`)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue("Не удалось получить пользователей")
    }
}
)