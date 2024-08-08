import React from 'react'

import styles from './Login.module.css'

const Login = () => {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.heading}>Zaloguj się na konto użytkownika</h1>
			<form className={styles.box_form}>
				<label className={styles.label}>email:</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>hasło:</label>
				<input className={styles.input} type='text' />
			</form>
			<button className={styles.btn_log}>Zaloguj</button>
		</main>
	)
}

export default Login
