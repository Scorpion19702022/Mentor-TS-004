import React from 'react'

const Login = () => {
	console.log('login')
	return (
		<main>
			<h1>Zaloguj się na konto użytkownika</h1>
			<form>
				<label>email</label>
				<input type='text' />
				<label>hasło</label>
				<input type='text' />
				<button>Zaloguj</button>
			</form>
		</main>
	)
}

export default Login
