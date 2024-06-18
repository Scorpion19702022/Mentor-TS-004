import Bestsellers from '../Components/Bestsellers/Bestsellers'

import { useEffect, useState } from 'react'

import styles from '../Components/Bestsellers/Bestsellers.module.css'
import { getAllMovies } from '../Api/Api'
import useAnousment from '../Hooks/useAnousment'
import Hero from '../Components/Hero/Hero'
import WillBeSoon from '../Components/WillBeSoon/WillBeSoon'
import ContactCta from '../Components/ContactCta/ContactCta'

const Home = () => {
	const { announcement } = useAnousment()

	const [movies, setMovies] = useState<any>([])

	useEffect(() => {
		const movieShow = async () => {
			const movies = await getAllMovies()
			setMovies(movies)
		}

		movieShow()
	}, [])

	console.log(announcement, 'test')

	const handleMoviesShow = () => {
		console.log('test')
		console.log(typeof movies)

		for (const movie of movies) {
			const date = new Date(movie.publishedDate)
			console.log(movie.publishedDate)
			console.log(date)
			const currentlyDate = new Date()
			date.setHours(0, 0, 0, 0)
			currentlyDate.setHours(0, 0, 0, 0)

			if (date > currentlyDate) {
				console.log('film jest odpowiedzią', date)
			}
		}

		// const date = movies[0]?.publishedDate
		// const newDate = new Date(date)
		// const currentlyDate = new Date()
		// newDate.setHours(0, 0, 0, 0)
		// currentlyDate.setHours(0, 0, 0, 0)

		// console.log(movies[0].publishedDate)
		// if (newDate > currentlyDate) {
		// 	console.log('film jest odpowiedzią')
		// }

		// console.log(newDate)
	}

	handleMoviesShow()

	return (
		<main className={styles.wrapper_main}>
			<div className={styles.wrapper_hero}>
				<Hero />
			</div>
			<Bestsellers />
			<ContactCta />
			<WillBeSoon />
		</main>
	)
}

export default Home
