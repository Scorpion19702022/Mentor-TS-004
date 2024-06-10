import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'
// import { getAllMovies } from '../../Api/Api'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase'

import movIm from '../../assets/movies.png'

const NavBar = () => {
	const [movies, setMovies] = useState<any>([])

	// useEffect(() => {
	// 	const fetchData = getAllMovies()
	// 	setMovies(fetchData)
	// }, [])

	const getAllMovies = async () => {
		try {
			const moviesCollection = collection(db, 'movies')
			const movies = await getDocs(moviesCollection)

			const moviesList = movies.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}))

			console.log(movies, 'movies')
			console.log(moviesList, 'moviesList')

			return moviesList
		} catch (error) {
			console.log(error)
		}
	}

	getAllMovies()

	return (
		<nav className={styles.nav}>
			<img className={styles.logo} src={movIm} alt='logo' />
			<div className={styles.mark}></div>
			<ul className={styles.ul_list}>
				<li className={styles.list}>Filmy i seriale</li>
				<li className={styles.list}>Blog</li>
				<li className={styles.list}>Kontakt</li>
			</ul>
		</nav>
	)
}

export default NavBar
