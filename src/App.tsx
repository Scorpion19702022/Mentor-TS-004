import React from 'react'
import styles from './App.module.css'

import NavBar from './Components/NavBar/NavBar'
import useMediaSearch from './Hooks/useMediaSearch'
import useTopRated from './Hooks/useTopRated'
import Bestsellers from './Components/Bestsellers/Bestsellers'

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import MoviePage from './Pages/MoviePage'

function App() {
	const { series, movies } = useMediaSearch()

	const { topRated } = useTopRated(3)

	console.log(topRated, 'ranking')
	console.log(series, 'seriale')
	console.log(movies, 'filmy')

	return (
		<div className={styles.wrapper}>
			<NavBar />
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/movie/title=:title' element={<MoviePage />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
