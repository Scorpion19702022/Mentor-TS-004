import styles from './MovieItem.module.css'

import Helicopter from '../../assets/helikopter.jpg'

const MovieItem = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box_movies}>
				<div className={styles.box_img}>
					<img className={styles.img_movie} src={Helicopter} alt='moviePhoto' />
				</div>
				<div className={styles.box_content}>
					<h4 className={styles.heading_movie}>Helikopter w ogniu</h4>
					<span className={styles.rating}>ocena: 10</span>
					<div className={styles.box_btns}>
						<button className={styles.btn}>zobacz</button>
						<button className={styles.btn}>add to</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
