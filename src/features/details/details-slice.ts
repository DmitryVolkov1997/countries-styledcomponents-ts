import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {Country, Extra, Status} from "src/types"

export const loadCountryByName = createAsyncThunk<
    { data: Country[] },
    string,
    { extra: Extra }
>
(
    '@@details/load-country-by-name',
    async (name, {extra: {client, api}}) => {
        return await client.get(api.searchByName(name))
    }
)

export const loadNeighborsByCodes = createAsyncThunk<{ data: Country[] }, string[], { extra: Extra }>('@@details/load-neighbors-by-codes', async (codes, {extra: {client, api}}) => {
    return await client.get(api.filterByCode(codes))
})

type DetailsSlice = {
    currentCountry: null | Country
    status: Status
    error: null | string
    neighbors: string[]
}

const initialState: DetailsSlice = {
    currentCountry: null,
    status: 'idle',
    error: null,
    neighbors: []
}

const detailsSlice = createSlice({
    name: '@@details',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadCountryByName.pending, (state) => {
            state.status = 'loading'
            state.error = null
        }).addCase(loadCountryByName.rejected, (state) => {
            state.status = 'rejected'
            state.error = 'Can not load data'
        }).addCase(loadCountryByName.fulfilled, (state, action) => {
            state.status = 'received'
            state.error = null
            state.currentCountry = action.payload.data[0]
        }).addCase(loadNeighborsByCodes.fulfilled, (state, action) => {
            state.neighbors = action.payload.data.map(country => country.name);
        })
    }
})

export default detailsSlice.reducer