import { actionTypes } from '../utils/actionTypes'

export const setFavorite = payload => ({
	type: actionTypes.setFavorite,
	payload,
})

export const deleteFavorite = payload => ({
	type: actionTypes.deleteFavorite,
	payload,
})

export const loginRequest = payload => ({
	type: actionTypes.loginRequest,
	payload,
})

export const registerRequest = payload => ({
	type: actionTypes.registerRequest,
	payload,
})

export const logoutRequest = () => ({
	type: actionTypes.logoutRequest,
})

export const getVideoSource = payload => ({
	type: actionTypes.getVideoSource,
	payload,
})

export const resetVideoSource = () => ({
	type: actionTypes.resetVideoSource,
})
