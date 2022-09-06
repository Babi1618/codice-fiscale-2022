import { createSlice } from '@reduxjs/toolkit'
const sliceName = "codiceFiscale"

export const codiceFiscaleSlice = createSlice({
	name: sliceName,
	initialState: {
		dati_personali: {
			cognome: "",
			nome: "",
			sesso: "",
			data_nascita: null,
			comune_nascita: "",
			stato_estero_nascita: "",
		},
	},
	reducers: {
		changeDatiPersonali: (state, action) => {
			state.dati_personali = action.payload
		}
	},
	extraReducers: {

	},

})
export const { changeDatiPersonali } = codiceFiscaleSlice.actions
export const datiPersonali = (state: any) => state[sliceName].dati_personali
export default codiceFiscaleSlice.reducer