import React from 'react'

const Registraction = () => {
	return (
		<main>
			<h1>Zarejestruh się</h1>
			<form>
				<label>Imię</label>
				<input type='text' />
				<label>Nazwisko</label>
				<input type='text' />
				<label>email</label>
				<input type='text' />
				<label>hasło</label>
				<input type='text' />
				<label>potwierdź hasło</label>
				<input type='text' />
				<label>numer telefonu</label>
				<input type='number' />
				<button>Rejestruj</button>
			</form>
		</main>
	)
}

export default Registraction
