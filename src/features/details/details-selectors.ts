import {RootState} from "src/store.ts"

export const selectDetails = (state: RootState) => state.details

export const selectNeighbors = (state: RootState) => state.details.neighbors