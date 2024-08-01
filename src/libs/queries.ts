import { gql } from '@apollo/client'

export const GET_POST = gql`
	query GetPosts {
		Blog {
			title
			author
			dateAdded
			content {
				html # Pobiera treść HTML z RichText
			}
			photo
		}
	}
`
