import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: `https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cly7hmkpo00gx07w400s6zgh2/master`,
	cache: new InMemoryCache(),
})

export default client
