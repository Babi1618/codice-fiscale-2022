import { createSlice } from '@reduxjs/toolkit'
import { getRegioniAsync } from '../_helpers/asyncThunk'

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
		lista_regioni: []
	},
	reducers: {
		changeDatiPersonali: (state, action) => {
			state.dati_personali = action.payload
		}
	},
	extraReducers: {
		[getRegioniAsync.fullfilled]: (state, action) => {
			console.log("prova")
			state.lista_regioni = action.payload.lista_province
		},
	},

})
export const { changeDatiPersonali } = codiceFiscaleSlice.actions
export const datiPersonali = (state: any) => state[sliceName].dati_personali
export const listaRegioni = (state: any) => state[sliceName].lista_regioni
export default codiceFiscaleSlice.reducer