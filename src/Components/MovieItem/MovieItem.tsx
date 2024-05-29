import styles from './MovieItem.module.css'

import Helicopter from '../../assets/helikopter.jpg'

const MovieItem = () => {
	return (
		<div className={styles.wrapper}>
			<img src={Helicopter} alt='moviePhoto' />
			<h4 className={styles.heading_movie}>Helikopter w ogniu</h4>
			<span className={styles.rating}>ocena: 10</span>
			<div className={styles.box_btns}>
				<button className={styles.btn}>zobacz</button>
				<button className={styles.btn}>add to</button>
			</div>
		</div>
	)
}

export default MovieItem
