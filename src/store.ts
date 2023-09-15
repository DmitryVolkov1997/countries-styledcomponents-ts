import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'
import {useDispatch} from 'react-redux'
import axios from "axios"
import * as api from './config.ts'

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    client: axios,
                    api,
                },
            },
            serializableCheck: false,
        })
    })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
