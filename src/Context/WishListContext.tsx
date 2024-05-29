import { createContext, useState } from 'react'

const defaultState: initialStateType = {
	wishList: [],
	addMovie: (movie: any) => {},
	deleteMovie: () => {},
}

type WishListProvider = {
	children: React.ReactNode
}

type initialStateType = {
	wishList: any[]
	addMovie: (movie: any) => void
	deleteMovie: () => void
}

const WishListContext = createContext(defaultState)

export const WishListProvider = ({ children }: WishListProvider) => {
	const [wishList, setWishList] = useState<any[]>([])

	const addMovie = (movie: any) => {
		setWishList([...wishList, movie])
	}

	const deleteMovie = () => {}

	// return <WishListContext.Provider value={{}}>{children}</WishListContext.Provider>
}

export default WishListContext
