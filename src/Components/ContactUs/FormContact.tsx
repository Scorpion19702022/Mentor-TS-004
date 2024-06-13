import styles from './Contact.module.css'

const FormContact = () => {
	return (
		<form className={styles.wrapper_form}>
			<div className={styles.box_form}>
				<label className={styles.label}>Wpisz tytuł wiadomości:"</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>Wpisz wiadomość:</label>
				<textarea className={styles.textarea}></textarea>
				<label className={styles.label}>Podaj adres email:</label>
				<input className={styles.input} type='text' />
			</div>
		</form>
	)
}

export default FormContact
