import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Theme as ThemeType } from 'src/types/theme'

const themeSlice = createSlice({
	name: 'theme',
	initialState: 'light' as ThemeType,
	reducers: {
		setTheme: (_, action: PayloadAction<ThemeType>) => action.payload,
	},
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
