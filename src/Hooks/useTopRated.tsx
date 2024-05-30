import { useEffect, useState } from 'react'
import { getAllMovies } from '../Api/Api'

const useTopRated = (limit: number) => {
	const [topRated, setTopRated] = useState<any>([])

	useEffect(() => {
		const moviesSortAndTop = async () => {
			const dataFromFirebaseSort: any = await getAllMovies()
			const sortRating = dataFromFirebaseSort.sort((a: any, b: any) => b.rating - a.rating)
			const topRating = sortRating.slice(0, limit)
			setTopRated(topRating)
		}

		moviesSortAndTop()
	}, [])

	return { topRated }
}

export default useTopRated
