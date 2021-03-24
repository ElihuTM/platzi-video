import { actionTypes } from '../utils/actionTypes'

const reducer = (state, action) => {
	switch(action.type) {
		case actionTypes.resetVideoSource:
			return {
				...state,
				playing: {},
			}
		case actionTypes.getVideoSource:
			return {
				...state,
				playing: (Object.values(state.videos)
					.flat()
					.find(item => item.id === Number(action.payload.id))
					|| {}
				)
			}
		case actionTypes.registerRequest:
			return {
				...state,
				user: action.payload,
			}
		case actionTypes.logoutRequest:
			return {
				...state,
				user: {},
			}
		case actionTypes.loginRequest:
			return {
				...state,
				user: action.payload,
			}
		case actionTypes.setFavorite:
			return (state.myList.some(item => item.id === action.payload.id))
				? state
				: {
					...state,
					myList: [...state.myList, action.payload]
				}
		case actionTypes.deleteFavorite:
			return {
				...state,
				myList: state.myList.filter(item => item.id !== action.payload)
			}
		default:
			return state
	}
}

export default reducer
