import React from 'react'
import { useFormContext } from 'react-hook-form'

interface IInputSelect {
	name: string,
	text: string,
	options: any
}
const InputSelect = (props: IInputSelect) => {
	const { register } = useFormContext()
	// const listaGenere = [{ text: "Maschile", value: "M" }, { text: "Femminile", value: "F" }]
	return (
		<>
			<label htmlFor={props.name} className="form-label">{props.text}</label>
			<br />
			<select className="form-select" aria-label="Default select example" {...register(props.name)}>
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