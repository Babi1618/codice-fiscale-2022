import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import InputText from './InputText'

const CodiceFiscale = () => {
	const onSubmit = (data: any) => {
		console.log(data)
	}

	const methods = useForm()
	return (
		<div className='container'>
			<h1>Calcolo codice Fiscale</h1>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<div className='row'>
						<div className='col-5'>Cognome
							<InputText />
						</div>
						<div className='col-5'>Nome

						</div>
						<div className='col-2'>Sesso

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
							<button>Calcola</button>
						</div>

					</div>
				</form>
			</FormProvider>
		</div>
	)
}

export default CodiceFiscale