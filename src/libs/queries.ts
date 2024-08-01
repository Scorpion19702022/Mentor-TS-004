import { gql } from '@apollo/client'

export const GET_POST = gql`
	query GetPosts {
		blog {
			title
			author
			dateAdded
			content
			photo
		}
	}
`
