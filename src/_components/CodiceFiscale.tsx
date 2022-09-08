import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import InputText from './InputText'
import InputSelect from './InputSelect'
import { getRegioniAsync } from '../_helpers/asyncThunk'
import { useDispatch, useSelector } from 'react-redux'
import { listaRegioni } from '../_redux/slice'
import { listaGenere } from '../_constants/lista_genere'
const CodiceFiscale = () => {
	const onSubmit = (data: any) => {
		console.log(data)
	}

	const lista_regioni = useSelector(listaRegioni)

	const methods = useForm({})
	const dispatch = useDispatch()

	useEffect(() => { dispatch(getRegioniAsync()) }, [])

	useEffect(() => { console.log(lista_regioni) }, [lista_regioni])

	return (
		<div className='cu7ontainer'>
			<h1>Calcolo codice Fiscale</h1>
			<FormProvider {...methods}>
				<form onClick={methods.handleSubmit(onSubmit)}>
					<div className='row'>
						<div className='col-5 mb-3'>
							<InputText
								text="Cognome"
								name="cognome" />
						</div>
						<div className='col-5'>
							<InputText
								text="Nome"
								name="nome" />
						</div>
						<div className='col-2'>
							<InputSelect
								text="Genere"
								name="genere"
								options={listaGenere}
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>Luogo Nascita

						</div>
						<div className='col-6'>Data Nascita

						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col'>
							<button type="submit">Calcola</button>
						</div>

					</div>
				</form>
			</FormProvider>
		</div>
	)
}

export default CodiceFiscale