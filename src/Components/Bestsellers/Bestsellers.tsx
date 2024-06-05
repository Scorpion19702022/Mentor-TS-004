import useTopRated from '../../Hooks/useTopRated'
import MovieItem from '../MovieItem/MovieItem'

import styles from './Bestsellers.module.css'

const Bestsellers = () => {
	const { topRated } = useTopRated(3)

	const topType = topRated.map((item: any) => <MovieItem movieProps={item} />)

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Bestsellers</h2>
			<div>{topType}</div>
		</section>
	)
}

export default Bestsellers
