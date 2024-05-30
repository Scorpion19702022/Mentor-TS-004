import useTopRated from '../../Hooks/useTopRated'
import MovieItem from '../MovieItem/MovieItem'

const Bestsellers = () => {
	const { topRated } = useTopRated(3)

	const topType = topRated.map((item: any) => <MovieItem movieProps={item} />)

	return (
		<section>
			<h2>Bestsellers</h2>
			<div>{topType}</div>
		</section>
	)
}

export default Bestsellers
