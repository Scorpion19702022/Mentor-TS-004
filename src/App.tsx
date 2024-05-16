import React from 'react'
import styles from './App.module.css'

import NavBar from './Components/NavBar/NavBar'
import useMediaSearch from './Hooks/useMediaSearch'
import useTopRated from './Hooks/useTopRated'

function App() {
	// const move = [
	// 	{
	// 		id: 0,
	// 		title: 'Helikopter w ogniu',
	// 		category: 'film',
	// 		director: 'Ridley Scott',
	// 		year: 2002,
	// 		rating: 10,
	// 	},
	// 	{
	// 		id: 1,
	// 		title: 'Dom z papieru',
	// 		category: 'serial',
	// 		director: 'Jan Kowalski',
	// 		year: 2010,
	// 		rating: 7,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Ojciec Chrzestny',
	// 		category: 'film',
	// 		director: 'Francis Ford Coppolla',
	// 		year: 1970,
	// 		rating: 9,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Gra o tron',
	// 		category: 'serial',
	// 		director: 'Ben Johnson',
	// 		year: 2017,
	// 		rating: 8,
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'Władca Pierścieni',
	// 		category: 'film',
	// 		director: 'Wolfgang Pettersen',
	// 		year: 1997,
	// 		rating: 10,
	// 	},
	// ]

	const { series, movies } = useMediaSearch()

	const { topRated } = useTopRated(3)

	console.log(topRated)

	return (
		<div className={styles.wrapper}>
			<NavBar />
		</div>
	)
}

export default App
