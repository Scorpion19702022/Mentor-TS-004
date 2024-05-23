import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'
import { getAllMovies } from '../../Api/Api'

const NavBar = () => {
	const [movies, setMovies] = useState<any>([])

	useEffect(() => {
		const fetchData = getAllMovies()
		setMovies(fetchData)
	}, [])

	console.log(movies)

	return (
		<nav className={styles.nav}>
			<span>logo</span>
			<ul className={styles.ul_list}>
				<li className={styles.list}>Filmy i seriale</li>
				<li className={styles.list}>Blog</li>
				<li className={styles.list}>Kontakt</li>
			</ul>
		</nav>
	)
}

export default NavBar
