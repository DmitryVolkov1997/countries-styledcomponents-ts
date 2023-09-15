import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {Country, Extra, Status} from "src/types"


export const loadCountries = createAsyncThunk<
    { data: Country[] },
    undefined,
    {
        state: { countries: CountrySlice },
        extra: Extra,
        rejectValue: string,
    }
>
(
    '@@countries/load-countries',
    async (_, {
        extra: {client, api},
        rejectWithValue,
    }) => {
        try {
            return client.get(api.ALL_COUNTRIES)
        } catch (error) {
            if (error instanceof Error)
                return rejectWithValue(error.message)
            return rejectWithValue('Unknown error')
        }
    }
)

type CountrySlice = {
    list: Country[],
    status: Status,
    error: string | null
}

const initialState: CountrySlice = {
    list: [],
    status: 'idle',
    error: null,
}

const countrySlice = createSlice({
    name: '@@countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadCountries.pending, (state) => {
            state.status = 'loading'
            state.error = null
        }).addCase(loadCountries.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload || 'Cannot load data'
        }).addCase(loadCountries.fulfilled, (state, action) => {
            state.list = action.payload.data
            state.status = 'received'
        })
    }
})

export default countrySlice.reducer