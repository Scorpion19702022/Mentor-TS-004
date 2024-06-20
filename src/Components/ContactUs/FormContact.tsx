import { useRef } from 'react'
import styles from './Contact.module.css'

import { useForm, SubmitHandler } from 'react-hook-form'

import emailjs from '@emailjs/browser'

type Input = {
	title: string
	content: string
	email: string
}

const FormContact = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Input>()
	const onSubmit: SubmitHandler<Input> = data => {
		console.log(data)
		emailjs.sendForm('service_w77dd6g', 'template_hey92tp', form.current, 'xbLltySyebCSexAaR').then(
			(result: any) => {
				console.log(result)
			},
			(error: any) => console.log(error)
		)
	}

	const form: any = useRef()

	return (
		<form className={styles.wrapper_form} onSubmit={handleSubmit(onSubmit)} ref={form}>
			<div className={styles.box_form}>
				<label className={styles.label}>Wpisz tytuł wiadomości:"</label>
				<input className={styles.input} type='text' {...register('title')} />
				<label className={styles.label}>Wpisz wiadomość:</label>
				<textarea className={styles.textarea} {...register('content')}></textarea>
				<label className={styles.label}>Podaj adres email:</label>
				<input className={styles.input} type='text' {...register('email')} />
			</div>
		</form>
	)
}

export default FormContact
