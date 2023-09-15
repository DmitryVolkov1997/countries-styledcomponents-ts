import {useAppDispatch} from "src/store.ts"
import {clearControls} from "src/features/controls/controls-slice.ts"

export const useCleanup = () => {
    const dispatch = useAppDispatch()

    const cleanUp = () => dispatch(clearControls());

    return cleanUp;
}