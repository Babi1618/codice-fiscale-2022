import { useFormContext } from 'react-hook-form'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { changeDatiPersonali, datiPersonali } from '../_redux/slice'
import { IInputText } from '../_models/IInput'

const InputText = (props: IInputText) => {
	const { register } = useFormContext()
	const dispatch = useDispatch()
	const dati_personali = useSelector(datiPersonali);

	const handleChange = (e: any) => {
		dispatch(changeDatiPersonali({ ...dati_personali, [e.target.name]: e.target.value }))
	}
	// useEffect(() => { console.log(dati_personali) }, [dati_personali])

	return (
		<>
			<label htmlFor={props.name} className="form-label">{props.text}</label>
			<input type="text" className="form-control" id={props.name} {...register(props.name)} onChange={(e) => handleChange(e)} />
		</>
	)
}

export default InputText