import {RootState} from "src/store.ts"
import {ControlsSlice} from "src/features/controls/controls-slice.ts"


export const visibleCountries = (state: RootState) => state.countries.list

export const selectCountriesInfo = (state: RootState) => ({
    qty: state.countries.list.length,
    error: state.countries.error,
    status: state.countries.status
})

export const selectVisibleCountries = (state: RootState, {search, region}: ControlsSlice) => {
    return state.countries.list.filter(country => {
        return country.name.toLowerCase().includes(search.toLowerCase()) && country.region.toLowerCase().includes(region.toLowerCase())
    })
}