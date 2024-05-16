import { useEffect, useState } from 'react'

const useTopRated = (limit: number) => {
	const movie = [
		{
			id: 0,
			title: 'Helikopter w ogniu',
			category: 'film',
			director: 'Ridley Scott',
			year: 2002,
			rating: 10,
		},
		{
			id: 1,
			title: 'Dom z papieru',
			category: 'serial',
			director: 'Jan Kowalski',
			year: 2010,
			rating: 7,
		},
		{
			id: 2,
			title: 'Ojciec Chrzestny',
			category: 'film',
			director: 'Francis Ford Coppolla',
			year: 1970,
			rating: 9,
		},
		{
			id: 3,
			title: 'Gra o tron',
			category: 'serial',
			director: 'Ben Johnson',
			year: 2017,
			rating: 8,
		},
		{
			id: 4,
			title: 'Władca Pierścieni',
			category: 'film',
			director: 'Wolfgang Pettersen',
			year: 1997,
			rating: 10,
		},
	]

	const [topRated, setTopRated] = useState<any>([])

	useEffect(() => {
		const sortRating = movie.sort((a, b) => b.rating - a.rating)
		const topRating = sortRating.slice(0, limit)
		setTopRated(topRating)
	}, [])

	return { topRated }
}

export default useTopRated
