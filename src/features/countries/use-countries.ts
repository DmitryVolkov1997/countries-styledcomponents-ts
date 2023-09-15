import {RootState, useAppDispatch} from "src/store.ts"
import {useSelector} from "react-redux"
import {
    selectCountriesInfo,
    selectVisibleCountries
} from "src/features/countries/countries-selectors.ts"
import {loadCountries} from "src/features/countries/countries-slice.ts"
import {useEffect} from "react"
import {Country} from "src/types"
import {selectControls} from "src/features/controls/controls-selectors.ts"

export const useCountries = (): [Country[], ReturnType<typeof selectCountriesInfo>] => {
    const dispatch = useAppDispatch()
    // const countries = useSelector(visibleCountries)
    const {status, qty, error} = useSelector(selectCountriesInfo)
    const controls = useSelector(selectControls)
    const countries = useSelector((state: RootState) => selectVisibleCountries(state, controls))

    useEffect(() => {
        if (!qty) {
            dispatch(loadCountries())
        }
    }, [dispatch, qty])

    return [countries, {status, error, qty}]
}