import React, { useState } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

import styles from './Registraction.module.css'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../Firebase'

type Input = {
	name: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
	phoneNumber: number
}

const Registraction = () => {
	const [firebaseError, setFirebaseError] = useState('')

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm<Input>()

	const onSubmit: SubmitHandler<Input> = async (data: any) => {
		console.log(data)
		try {
			await createUserWithEmailAndPassword(auth, data.email, data.password)
			reset()
		} catch (error) {
			console.log(error)
			setFirebaseError((error as Error).message)
			console.log(firebaseError)
		}
	}

	const validationRegistration = {
		name: {
			required: 'pole jest wymagane',
			minLength: {
				value: 3,
				message: 'za mało znaków',
			},
		},
		lastName: {
			required: 'pole jest wymagane',
			minLength: {
				value: 3,
				message: 'za mało znaków',
			},
		},
		email: {
			required: 'pole jest wymagane',
		},
		password: {
			required: 'pole jest wymagane',
		},
		confirmPassword: {
			required: 'pole jest wymagane',
		},

		phoneNumber: {
			required: 'pole jest wymagane',
			minLength: {
				value: 9,
				message: 'niezgodny numer telefonu',
			},
		},
	}

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.heading}>Zarejestruj się</h1>
			<form className={styles.box_form} onSubmit={handleSubmit(onSubmit)}>
				<label className={styles.label}>Imię:</label>
				<input className={styles.input} type='text' {...register('name', validationRegistration.name)} />
				{errors.name?.message ? <span>{errors.name.message}</span> : null}
				<label className={styles.label}>Nazwisko:</label>
				<input className={styles.input} type='text' {...register('lastName', validationRegistration.lastName)} />
				{errors.lastName?.message ? <span>{errors.lastName.message}</span> : null}
				<label className={styles.label}>email:</label>
				<input className={styles.input} type='text' {...register('email', validationRegistration.email)} />
				{errors.email?.message ? <span>{errors.email.message}</span> : null}
				<label className={styles.label}>hasło:</label>
				<input className={styles.input} type='text' {...register('password', validationRegistration.password)} />
				{errors.password?.message ? <span>{errors.password.message}</span> : null}
				<label className={styles.label}>potwierdź hasło:</label>
				<input
					className={styles.input}
					type='text'
					{...register('confirmPassword', validationRegistration.confirmPassword)}
				/>
				{errors.confirmPassword?.message ? <span>{errors.confirmPassword.message}</span> : null}
				<label className={styles.label}>numer telefonu:</label>
				<input
					className={styles.input}
					type='number'
					{...register('phoneNumber', validationRegistration.phoneNumber)}
				/>
				{errors.phoneNumber?.message ? <span>{errors.phoneNumber.message}</span> : null}
				<button type='submit' className={styles.btn_reg}>
					Rejestruj
				</button>
			</form>
		</main>
	)
}

export default Registraction
