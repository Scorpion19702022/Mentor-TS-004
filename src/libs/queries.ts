import { gql } from '@apollo/client'

export const GET_POST = gql`
	query GetPosts {
		Blog {
			Title
			Author
			DateAdded
			Content
			Photo
		}
	}
`
