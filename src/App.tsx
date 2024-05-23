import React from 'react'
import styles from './App.module.css'

import NavBar from './Components/NavBar/NavBar'
import useMediaSearch from './Hooks/useMediaSearch'
import useTopRated from './Hooks/useTopRated'
import MovieItem from './Components/MovieItem/MovieItem'

function App() {
	const { series, movies } = useMediaSearch()

	const { topRated } = useTopRated(3)

	console.log(topRated)

	return (
		<div className={styles.wrapper}>
			<NavBar />
			<MovieItem />
		</div>
	)
}

export default App
