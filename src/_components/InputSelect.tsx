import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { changeDatiPersonali, datiPersonali } from '../_redux/slice'

interface IInputSelect {
	name: string,
	text: string,
	options: any
}
const InputSelect = (props: IInputSelect) => {
	const { register } = useFormContext()
	// const listaGenere = [{ text: "Maschile", value: "M" }, { text: "Femminile", value: "F" }]

	interface ISelectData {
		name: string,
		value: string
	}
	const dati_personali = useSelector(datiPersonali)
	const dispatch = useDispatch()
	const handleChangeSelect = (e: ISelectData) => {
		console.log(e)
		dispatch(changeDatiPersonali({ ...dati_personali, [e.name]: e.value }))
	}
	useEffect(() => {
		// console.log(dati_personali)
	}, [dati_personali])
	
	return (
		<>
			<label htmlFor={props.name} className="form-label">{props.text}</label>
			<br />
			<select
				className="form-select"
				aria-label="Default select example"
				{...register(props.name)} onChange={(e) => handleChangeSelect({ name: e.target.name, value: e.target.value })}>
				<option value="">--seleziona--</option>
				{
					props.options.map((el: any) => {
						return <option key={el.value} value={el.value}>{el.text}</option>
					})
				}
			</select>
		</>
	)
}

export default InputSelect