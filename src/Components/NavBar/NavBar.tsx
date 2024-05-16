import React from 'react'

import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = () => {
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
