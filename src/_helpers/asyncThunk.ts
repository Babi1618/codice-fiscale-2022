import { createAsyncThunk } from "@reduxjs/toolkit";
import { string } from "yup";

export const getRegioniAsync: any = createAsyncThunk("cf/regioni",
	async () => {
		const response = await fetch("https://comuni-ita.herokuapp.com/api/regioni");
		if (response.ok) {
			const lista_regioni: any = []
			const regioni = await response.json();
			// console.log(lista_regioni)
			regioni.map((regione: string) => {
				console.log(regione)
				lista_regioni.push({ "text": regione, "value": regione })
			})
			return { lista_regioni }
		}
	})

