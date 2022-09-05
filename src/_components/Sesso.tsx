import React from 'react'
import { useFormContext } from 'react-hook-form'

interface IInputSelect {
	name: string,
	text: string,
}
const Sesso = (props: IInputSelect) => {
	const { register } = useFormContext()
	return (
		<>
			<label htmlFor={props.name} className="form-label">{props.text}</label>
			<select  className="form-select" aria-label="Default select example" {...register(props.name)}>
				<option selected>Selezionare</option>
				<option value="M">Maschile</option>
				<option value="F">Femminile</option>
			</select>
		</>
	)
}

export default Sesso