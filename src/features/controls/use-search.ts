import { useSelector } from 'react-redux'
import { useAppDispatch } from 'src/store'
import { selectSearch } from './controls-selectors'
import { setSearch } from './controls-slice'
import { ChangeEvent } from 'react'

export const useSearch = (): [
	string,
	(e: ChangeEvent<HTMLInputElement>) => void
] => {
	const dispatch = useAppDispatch()
	const search = useSelector(selectSearch)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearch(e.target.value))
	}

	return [search, handleSearch]
}
