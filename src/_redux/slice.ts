import { createSlice } from '@reduxjs/toolkit'
import { getRegioniAsync } from '../_helpers/asyncThunk'

const sliceName = "codiceFiscale"
export const codiceFiscaleSlice = createSlice({
	name: sliceName,
	initialState: {
		dati_personali: {
			cognome: "",
			nome: "",
			genere: "",
			data_nascita: null,
			regione_nascita: "",
			provincia_nascita: "",
			comune_nascita: "",
			stato_estero_nascita: "",
		},
		lista_regioni: [],
		loadingRegioni: false,
		getRegioniOk: false,
	},
	reducers: {
		changeDatiPersonali: (state, action) => {
			state.dati_personali = action.payload
		}
	},
	extraReducers: {
		[getRegioniAsync.pending]: (state) => {
			state.loadingRegioni = true
		},
		[getRegioniAsync.rejected]: (state) => {
			state.loadingRegioni = false
			state.getRegioniOk = false
		},
		[getRegioniAsync.fulfilled]: (state, action) => {
			state.loadingRegioni = false
			state.getRegioniOk = true
			state.lista_regioni = action.payload.lista_regioni
		},
	},

})
export const { changeDatiPersonali } = codiceFiscaleSlice.actions
export const datiPersonali = (state: any) => state[sliceName].dati_personali
export const listaRegioni = (state: any) => state[sliceName].lista_regioni
export default codiceFiscaleSlice.reducer