import {combineReducers} from '@reduxjs/toolkit'
import themeReducer from './features/theme/theme-slice'
import controlsReducer from './features/controls/controls-slice'
import countriesReducer from "src/features/countries/countries-slice.ts"
import detailsReducer from "src/features/details/details-slice.ts"

export const rootReducer = combineReducers({
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
    details: detailsReducer
})
