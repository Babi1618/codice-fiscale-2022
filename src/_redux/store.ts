import { configureStore } from '@reduxjs/toolkit'
import codiceFiscaleReducer from './slice'

export default configureStore({
	reducer: {
		codiceFiscale: codiceFiscaleReducer
	},
})