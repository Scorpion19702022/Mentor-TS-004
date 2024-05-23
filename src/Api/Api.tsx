import axios from 'axios'
import { URL } from './Constans'

export const getAllMovies = async () => {
	try {
		const response: any = await axios.get(URL)
		return response.data
	} catch (error) {
		console.log(error)
	}
}
