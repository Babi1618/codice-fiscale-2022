import React from 'react'
import { useForm } from 'react-hook-form'

const CodiceFiscale = () => {
	const { handleSubmit } = useForm()
	const onClickCalcola = (data: any) => {
		console.log(data)
	}
	return (
		<div className='container'>
			<h1>Calcolo codice Fiscale</h1>
			<form onSubmit={handleSubmit(onClickCalcola)}>
				<div className='row'>
					<div className='col-5'>Cognome

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

		</div>
	)
}

export default CodiceFiscale