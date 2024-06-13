import useAnousment from '../../Hooks/useAnousment'
import MovieItem from '../MovieItem/MovieItem'

const AddRecently = () => {
	const { announcement } = useAnousment()

	const addRecentlyMovies = announcement.map((item: any) => <MovieItem movieProps={item} />)

	console.log(announcement)

	return (
		<section>
			<h2>Zapowiedzi</h2>
			<div>{addRecentlyMovies}</div>
		</section>
	)
}

export default AddRecently
