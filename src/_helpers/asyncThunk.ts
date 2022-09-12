import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { datiPersonali } from "../_redux/slice";

export const getRegioniAsync: any = createAsyncThunk("cf/regioni",
	async () => {
		const response = await fetch("https://comuni-ita.herokuapp.com/api/regioni");
		if (response.ok) {
			const lista_regioni: any = []
			const regioni = await response.json();
			regioni.map((regione: string) => {
				lista_regioni.push({ "text": regione, "value": regione })
			})
			return { lista_regioni }
		}
	})

export const getProvinceAsync: any = createAsyncThunk("cf/province",
	async (regione: string) => {
		const response = await fetch(`https://comuni-ita.herokuapp.com/api/province/${regione}`);
		if (response.ok) {
			const lista_province: any = []
			const province = await response.json();
			province.map((provincia: any) => {
				lista_province.push({ text: provincia.nome, value: provincia.nome })
			})
			return { lista_province }
		}
	}
)
export const getComuniAsync: any = createAsyncThunk("cf/comuni",
	async (comune: string) => {
		const response = await fetch(`https://comuni-ita.herokuapp.com/api/comuni/provincia/${comune}`);
		if (response.ok) {
			const lista_comuni: any = []
			const comuni = await response.json();
			comuni.map((comune: any) => {
				lista_comuni.push({ text: comune.nome, value: comune.codiceCatastale })
			})
			return { lista_comuni }
		}
	}
)