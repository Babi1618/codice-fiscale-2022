import { createSlice } from '@reduxjs/toolkit'
const sliceName = "codiceFiscale"
export const codiceFiscaleSlice = createSlice({
	name: sliceName,
	initialState: {
		value: "prova"
	},
	reducers: {

	},
	extraReducers: {

	},

})
export const { } = codiceFiscaleSlice.actions
export const provaSlice = (state: any) => state[sliceName]
export default codiceFiscaleSlice.reducer