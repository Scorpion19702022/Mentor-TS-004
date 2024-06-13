import styles from './Contact.module.css'

const LocationMap = () => {
	return (
		<div className={styles.box_map}>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112999.27014597661!2d-81.57711622904039!3d27.741137693754695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd0149f075be7f%3A0x69a8d7201cb319be!2sRainbow!5e0!3m2!1spl!2spl!4v1718299246684!5m2!1spl!2spl'
				width='600'
				height='450'
				loading='lazy'
			></iframe>
		</div>
	)
}

export default LocationMap
