import { Header, Main } from './components'
import {DetailsPage, HomePage} from './pages'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/country/:name' element={<DetailsPage />} />
				</Routes>
			</Main>
		</>
	)
}

export default App
