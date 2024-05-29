import styles from './MovieItem.module.css'

import Helicopter from '../../assets/helikopter.jpg'

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

import AddCommentIcon from '@mui/icons-material/AddComment'

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
						<button className={styles.btn}>
							<RemoveRedEyeIcon style={{ fontSize: '30px' }} />
						</button>
						<button className={styles.btn}>
							<AddCommentIcon style={{ fontSize: '30px' }} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
