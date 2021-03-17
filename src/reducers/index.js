const reducer = (state, action) => {
	switch(action.type) {
		case 'SET_FAVORITE':
			return (state.videos.myList.some(item => item.id === action.payload.id))
				? state
				: {
					...state,
					videos: {
						...state.videos,
						myList: [...state.videos.myList, action.payload]
					}
				}
		case 'DELETE_FAVORITE':
			return {
				...state,
				videos: {
					...state.videos,
					myList: state.videos.myList.filter(item => item.id !== action.payload)
				}
			}
		default:
			return state
	}
}

export default reducer
