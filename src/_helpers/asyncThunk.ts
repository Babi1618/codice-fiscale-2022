import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRegioniAsync: any = createAsyncThunk("cf/regioni",
	async () => {
		const response = await fetch("https://comuni-ita.herokuapp.com/api/regioni");
		if (response.ok) {
			const regioni = await response.json();
			const lista_regioni = regioni
			return { lista_regioni }
		}
	})

