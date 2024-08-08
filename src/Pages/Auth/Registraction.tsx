import React from 'react'

import styles from './Registraction.module.css'

const Registraction = () => {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.heading}>Zarejestruj się</h1>
			<form className={styles.box_form}>
				<label className={styles.label}>Imię:</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>Nazwisko:</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>email:</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>hasło:</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>potwierdź hasło:</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>numer telefonu:</label>
				<input className={styles.input} type='number' />
			</form>
			<button className={styles.btn_reg}>Rejestruj</button>
		</main>
	)
}

export default Registraction
