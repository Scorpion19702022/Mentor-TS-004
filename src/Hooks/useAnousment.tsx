import { useEffect, useState } from 'react'
import { getAllMovies } from '../Api/Api'

const useAnousment = () => {
	const [announcement, setAnnouncment] = useState<any>([])

	useEffect(() => {
		const selectAnnouncement = async () => {
			const dataFromFirebase: any = await getAllMovies()

			console.log(dataFromFirebase, 'ble')

			const newAnnouncement = []

			for (const movie of dataFromFirebase) {
				const date = new Date(movie.publishedDate)
				console.log(date, 'dodane coś')
				const currentlyDate = new Date()
				date.setHours(0, 0, 0, 0)
				currentlyDate.setHours(0, 0, 0, 0)

				if (date > currentlyDate) {
					newAnnouncement.push(movie)
				}
			}

			setAnnouncment(newAnnouncement)
		}

		selectAnnouncement()
	}, [])

	return { announcement }
}

export default useAnousment
