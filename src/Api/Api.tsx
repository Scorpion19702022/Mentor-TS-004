import axios from 'axios'
import { URL } from './Constans'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../Firebase'

// export const getAllMovies = async () => {
// 	try {
// 		const response: any = await axios.get(URL)
// 		return response.data
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

export const getAllMovies = async () => {
	try {
		const moviesCollection = collection(db, 'movies')
		const movies = await getDocs(moviesCollection)

		const moviesList = movies.docs.map(doc => ({
			id: doc.id,
			...doc.data(),
		}))

		// console.log(movies, 'movies')
		// console.log(moviesList, 'moviesList')

		return moviesList
	} catch (error) {
		console.log(error)
	}
}
