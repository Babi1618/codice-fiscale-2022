import React from 'react'

const CodiceFiscale = () => {
	return (
		<div className='container'>
			<h1>Calcolo codice Fiscale</h1>
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

		</div>
	)
}

export default CodiceFiscale