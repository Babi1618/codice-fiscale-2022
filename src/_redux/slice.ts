import { createSlice } from '@reduxjs/toolkit'
import { getProvinceAsync, getRegioniAsync } from '../_helpers/asyncThunk'

const sliceName = "codiceFiscale"
export const codiceFiscaleSlice = createSlice({
	name: sliceName,
	initialState: {
		dati_personali: {
			cognome: "",
			nome: "",
			genere: "",
			data_nascita: null,
			regione_nascita: null,
			provincia_nascita: "",
			comune_nascita: "",
			stato_estero_nascita: "",
		},
		regioni: {
			lista_regioni: [],
			loadingRegioni: false,
			getRegioniOk: false,
		},
		province: {
			lista_province: [],
			loadingProvince: false,
			getProvinceOk: false,
		},
		comuni: {
			lista_comuni: [],
			loadingComuni: false,
			getComuniOk: false,
		}
	},
	reducers: {
		changeDatiPersonali: (state, action) => {
			state.dati_personali = action.payload
		}
	},
	extraReducers: {
		[getRegioniAsync.pending]: (state) => {
			state.regioni.loadingRegioni = true
		},
		[getRegioniAsync.rejected]: (state) => {
			state.regioni.loadingRegioni = false
			state.regioni.getRegioniOk = false
		},
		[getRegioniAsync.fulfilled]: (state, action) => {
			state.regioni.loadingRegioni = false
			state.regioni.getRegioniOk = true
			state.regioni.lista_regioni = action.payload.lista_regioni
		},
		[getProvinceAsync.pending]: (state) => {
			// console.log("Province get Loading...");
			// state.loadingProvince = true
		},
		[getProvinceAsync.rejected]: (state) => {
			// console.log("Province get Rejected...");
			// state.loadingProvince = false
			// state.getProvinceOk = false
		},
		[getProvinceAsync.fulfilled]: (state, action) => {
			// console.log("Province get Success...");
			// state.loadingProvince = false
			// state.getProvinceOk = true
			state.province.lista_province = action.payload.lista_province;
		},
	},

})
export const { changeDatiPersonali } = codiceFiscaleSlice.actions
export const datiPersonali = (state: any) => state[sliceName].dati_personali
export const listaRegioni = (state: any) => state[sliceName].regioni.lista_regioni
export const listaProvince = (state: any) => state[sliceName].province.lista_province
export default codiceFiscaleSlice.reducer