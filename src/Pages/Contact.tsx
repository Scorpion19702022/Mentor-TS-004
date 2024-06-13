import FormContact from '../Components/ContactUs/FormContact'
import LocationMap from '../Components/ContactUs/LocationMap'

import styles from '../Components/ContactUs/Contact.module.css'

const Contact = () => {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.heading}>Skontaktuj się z nami</h1>
			<div className={styles.box_contact}>
				<LocationMap />
				<FormContact />
			</div>
		</main>
	)
}

export default Contact
