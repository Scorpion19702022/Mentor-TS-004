import React from 'react'

import styles from './BlogPage.module.css'

const BlogPage = () => {
	console.log('blog')

	return (
		<section className={styles.wrapper_blog}>
			<h2 className={styles.heading}>Blog</h2>
		</section>
	)
}

export default BlogPage
