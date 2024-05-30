import { useEffect, useState } from 'react'
import { getAllMovies } from '../Api/Api'

const useMediaSearch = () => {
	const [movies, setMovies] = useState<any>([])
	const [series, setSeries] = useState<any>([])

	useEffect(() => {
		const takeData = async () => {
			const dataFromFirebase: any = await getAllMovies()
			const series = dataFromFirebase.filter((series: any) => series.type === 'serial')

			const movies = dataFromFirebase.filter((movie: any) => movie.type === 'film')
			setMovies(movies)
			setSeries(series)
		}
		takeData()
	}, [])

	return { series, movies }
}

export default useMediaSearch
