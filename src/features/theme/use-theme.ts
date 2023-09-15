import { useAppDispatch } from 'src/store'
import { setTheme } from './theme-slice'
import { getTheme } from './theme-selectors'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Theme } from 'src/types/theme'

export const useTheme = (): [Theme, () => void] => {
	const dispatch = useAppDispatch()
	const theme = useSelector(getTheme)

	const toggleTheme = () => {
		dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
	}

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return [theme, toggleTheme]
}
