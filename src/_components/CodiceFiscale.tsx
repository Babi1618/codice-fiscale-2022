import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import InputText from './InputText'
import Sesso from './Sesso'

const CodiceFiscale = () => {
	const onSubmit = (data: any) => {
		console.log(data)
	}

	const methods = useForm({
		mode: "onChange"
	})

	return (
		<div className='container'>
			<h1>Calcolo codice Fiscale</h1>
			<FormProvider {...methods}>
				<form onClick={methods.handleSubmit(onSubmit)}>
					<div className='row'>
						<div className='col-5 mb-3'>Cognome
							<InputText
								text="Cognome"
								name="cognome" />
						</div>
						<div className='col-5'>Nome
							<InputText
								text="Nome"
								name="nome" />
						</div>
						<div className='col-2'>
							<Sesso
								text="Sesso"
								name="sesso"
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