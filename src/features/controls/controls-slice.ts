import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type ControlsSlice = {
    region: string
    search: string
}

const initialState: ControlsSlice = {
    region: '',
    search: '',
}

const controlsSlice = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        setRegion(state, action: PayloadAction<string>) {
            state.region = action.payload
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        clearControls: () => initialState
    },
})

export const {setRegion, setSearch, clearControls} = controlsSlice.actions
export default controlsSlice.reducer
