import styles from './ContactCta.module.css'

import photos from '../../assets/przelecz_1.jpg'

import { Link } from 'react-router-dom'

const ContactCta = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_contact}>
				<h2>Masz pytania</h2>
				<Link to='/contact'>
					<button>Kontakt</button>
				</Link>
			</div>
			<img className={styles.img} src={photos} alt='photos' />
			<div className={styles.shadow}></div>
		</section>
	)
}

export default ContactCta
