import React from 'react'
import { useFormContext } from 'react-hook-form'

const InputText = () => {
	const { register } = useFormContext()
	return (
		<div>InputText
			<input type="text" {...register("cognome")} />

		</div>
	)
}

export default InputText