import {useAppDispatch} from "src/store.ts"
import {useSelector} from "react-redux"
import {selectDetails} from "src/features/details/details-selectors.ts"
import {useEffect} from "react"
import {loadCountryByName} from "src/features/details/details-slice.ts"

export const useDetails = (name: string | undefined) => {
    const dispatch = useAppDispatch()
    const details = useSelector(selectDetails)

    useEffect(() => {
        if (name) {
            dispatch(loadCountryByName(name))
        }
    }, [dispatch, name])

    return details
}