import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import InputText from './InputText'
import InputSelect from './InputSelect'
import { getProvinceAsync, getRegioniAsync } from '../_helpers/asyncThunk'
import { useDispatch, useSelector } from 'react-redux'
import { datiPersonali, listaProvince, listaRegioni } from '../_redux/slice'
import { listaGenere } from '../_constants/lista_genere'

const CodiceFiscale = () => {

	const onSubmit = (data: any) => {
		// console.log(data)
	}

	const lista_regioni = useSelector(listaRegioni)
	const lista_province = useSelector(listaProvince)
	const dati_personali = useSelector(datiPersonali)
	const methods = useForm({})
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getRegioniAsync())

	}, [])

	useEffect(() => {
		// console.log(dati_personali.regione_nascita)
		if (dati_personali.regione_nascita !== null) {
			dispatch(getProvinceAsync(dati_personali.regione_nascita))
		}
	}, [dati_personali.regione_nascita])

	useEffect(() => { console.log(lista_province) }, [lista_province])

	return (
		<div className='container'>
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
								disabled={false}

							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-4'>
							<InputSelect
								text="Regione"
								name="regione_nascita"
								options={lista_regioni}
								disabled={false}

							/>
						</div>
						<div className='col-4'>
							<InputSelect
								text="Provincia di Nascita"
								name="provincia_nascita"
								options={lista_province}
								disabled={false}
							// disabled={dati_personali.regione_nascita ? false : true}
							/>
						</div>
						<div className='col-4'>
							<InputSelect
								text="Comune di Nascita"
								name="comune_nascita"
								options={[]}
								disabled={false}
							// disabled={dati_personali.regione_nascita ? false : true}
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>Comune Nascita

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