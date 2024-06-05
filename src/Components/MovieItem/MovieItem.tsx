import styles from './MovieItem.module.css'

import Helicopter from '../../assets/helikopter.jpg'

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

import AddCommentIcon from '@mui/icons-material/AddComment'

import { Link } from 'react-router-dom'

type movieItemProps = {
	movieProps: any
}

const MovieItem: React.FC<movieItemProps> = ({ movieProps }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box_movies}>
				<div className={styles.box_img}>
					<img className={styles.img_movie} src={Helicopter} alt='moviePhoto' />
				</div>
				<div className={styles.box_content}>
					<div className={styles.content}>
						<h4 className={styles.heading_movie}>{movieProps.title}</h4>
						<span className={styles.rating}>ocena: {movieProps.rating}</span>
					</div>
					<div className={styles.btns}>
						<Link to={`/movie/title=${movieProps.title}`}>
							<button className={styles.btn}>
								zobacz
								<RemoveRedEyeIcon style={{ fontSize: '30px' }} />
							</button>
						</Link>
						<button className={styles.btn}>
							dodaj
							<AddCommentIcon style={{ fontSize: '30px' }} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
