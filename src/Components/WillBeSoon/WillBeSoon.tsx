import useAnousment from '../../Hooks/useAnousment'
import MovieItem from '../MovieItem/MovieItem'

import styles from './WillBeSoon.module.css'

const AddRecently = () => {
	const { announcement } = useAnousment()

	const willBeAdd = announcement.map((item: any) => <MovieItem movieProps={item} />)

	console.log(announcement)

	return (
		<section className={styles.wrapper}>
			<h2>Zapowiedzi</h2>
			<div className={styles.box_wiilBe}>{willBeAdd}</div>
		</section>
	)
}

export default AddRecently
