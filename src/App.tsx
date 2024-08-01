import React from 'react'
import styles from './App.module.css'

import NavBar from './Components/NavBar/NavBar'
import useMediaSearch from './Hooks/useMediaSearch'
import useTopRated from './Hooks/useTopRated'
// import Bestsellers from './Components/Bestsellers/Bestsellers'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import MoviePage from './Pages/MoviePage'
import Contact from './Pages/Contact'
import BlogPage from './Pages/BlogPage/BlogPage'
import Login from './Pages/Auth/Login'
import Registraction from './Pages/Auth/Registraction'

function App() {
	const { series, movies } = useMediaSearch()

	const { topRated } = useTopRated(3)

	console.log(topRated, 'ranking')
	console.log(series, 'seriale')
	console.log(movies, 'filmy')

	return (
		<div className={styles.wrapper}>
			{/* <NavBar /> */}
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/movie/title=:title' element={<MoviePage />} />
					<Route path='/blog' element={<BlogPage />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Registraction />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
