import styles from './ContactCta.module.css'

import heroImage from '../../assets/hero_image.jpg'

import { Link } from 'react-router-dom'

const ContactCta = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_contact}>
				<h2 className={styles.heading_contact}>Masz pytania?</h2>
				<Link to='/contact'>
					<button className={styles.btn_contact}>Kontakt</button>
				</Link>
			</div>
			<img className={styles.img} src={heroImage} alt='photos' />
			<div className={styles.shadow}></div>
		</section>
	)
}

export default ContactCta
