import {useAppDispatch} from 'src/store'
import {selectRegion} from './controls-selectors'
import {useSelector} from 'react-redux'
import {Option} from 'src/types'
import {setRegion} from './controls-slice'
import {Region} from 'src/types/region.ts'
import {SingleValue} from "react-select"

type onSelect = (reg: SingleValue<Option>) => void

export const useRegion = (): [Region | '', (val: Option) => void] => {
    const dispatch = useAppDispatch()
    const region = useSelector(selectRegion)

    const handleRegion: onSelect = (val) => {
        if (val) {
            dispatch(setRegion(val.value))
        } else {
            dispatch(setRegion(''))
        }
    }

    return [region as Region, handleRegion]
}
