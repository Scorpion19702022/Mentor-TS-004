import React from 'react'

import styles from './BlogPage.module.css'
import { useQuery } from '@apollo/client'
import { GET_POST } from '../../libs/queries'

const BlogPage = () => {
	const { error, loading, data } = useQuery(GET_POST)

	console.log(data)

	if (loading) return <h3>loading ...</h3>

	if (error) return <h3>error</h3>

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Blog</h2>
			{data.map((p: any) => {
				return (
					<div>
						<h3>{p.title}</h3>
					</div>
				)
			})}
		</section>
	)
}

export default BlogPage
