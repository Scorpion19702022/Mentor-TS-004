import { useRef } from 'react'
import styles from './Contact.module.css'

import { useForm, SubmitHandler } from 'react-hook-form'

import emailjs from '@emailjs/browser'
import { error } from 'console'

type Input = {
	title: string
	content: string
	email: string
}

const FormContact = () => {
	const registerOptions = {
		title: {
			required: `pole jest wymagane`,
			minLength: {
				value: 10,
				message: 'za mało zaków',
			},
			maxLength: {
				value: 20,
				message: 'za dużo znaków',
			},
		},
		content: {
			required: 'pole jest wymagane',
			maxLength: {
				value: 100,
				message: 'za dużo znaków',
			},
		},
		email: {
			required: 'pole wymagane',
		},
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm<Input>()
	const onSubmit: SubmitHandler<Input> = (data: Input) => {
		console.log(data)
		emailjs.sendForm('service_w77dd6g', 'template_hey92tp', form.current, 'xbLltySyebCSexAaR').then(
			(result: any) => {
				console.log(result.text)
			},
			(error: any) => console.log(error)
		)
		reset()
	}

	const form: any = useRef()

	return (
		<form className={styles.wrapper_form} onSubmit={handleSubmit(onSubmit)} ref={form}>
			<div className={styles.box_form}>
				<label className={styles.label}>Wpisz tytuł wiadomości:"</label>
				<input className={styles.input} type='text' {...register('title', registerOptions.title)} />
				{errors.title?.message ? (
					<span className={styles.errors}>{errors.title?.message}</span>
				) : (
					<span className={styles.noErrors}></span>
				)}
				<label className={styles.label}>Wpisz wiadomość:</label>
				<textarea className={styles.textarea} {...register('content', registerOptions.content)}></textarea>
				{errors.content?.message ? (
					<span className={styles.errors}>{errors.content?.message}</span>
				) : (
					<span className={styles.noErrors}></span>
				)}
				<label className={styles.label}>Podaj adres email:</label>
				<input className={styles.input} type='text' {...register('email', registerOptions.email)} />
				{errors.email?.message ? (
					<span className={styles.errors}>{errors.email?.message}</span>
				) : (
					<span className={styles.noErrors}></span>
				)}
				<button type='submit'>Wyślij</button>
			</div>
		</form>
	)
}

export default FormContact
