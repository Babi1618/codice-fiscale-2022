import { useFormContext } from 'react-hook-form'

interface IInputText {
	name: string,
	text: string
}

const InputText = (props: IInputText) => {
	const { register } = useFormContext()
	return (
		<>
			<label htmlFor={props.name} className="form-label">{props.text}</label>
			<input type="text" className="form-control" id={props.name} {...register(props.name)} onChange={(e) => console.log(e.target.value)} />
		</>
	)
}

export default InputText