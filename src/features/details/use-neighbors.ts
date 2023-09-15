import {useAppDispatch} from "src/store.ts"
import {useSelector} from "react-redux"
import {selectNeighbors} from "src/features/details/details-selectors.ts"
import {useEffect} from "react"
import {loadNeighborsByCodes} from "src/features/details/details-slice.ts"

export const useNeighbors = (borders: string[]) => {
    const dispatch = useAppDispatch()
    const neighbors = useSelector(selectNeighbors)

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByCodes(borders))
        }
    }, [dispatch, borders])

    return neighbors
}