import styles from './MovieItem.module.css'

const MovieItem = () => {
	return (
		<div className={styles.wrapper}>
			<img src='' alt='' />
			<h4>Helikopter w ogniu</h4>
			<span>ocena: 10</span>
			<div>
				<button>zobacz</button>
				<button>add to</button>
			</div>
		</div>
	)
}

export default MovieItem
