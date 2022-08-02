import React, { useState } from 'react'
import Sesso from './Sesso'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';

const CodiceFiscale = () => {
	const [startDate, setStartDate] = useState(new Date());
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = (data: any) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='container'>
				<div className='row text-center'>
					<div className='col-12'>Codice Fiscale
					</div>
				</div>
				<div className='row'>
					<div className='col-5'>
						<div className="mb-3">
							<label className="form-label">Nome</label>
							<input type="text" className="form-control" id="nome" placeholder="nome" {...register("nome")} />
						</div>
					</div>
					<div className='col-5'>
						<div className="mb-3">
							<label className="form-label">Cognome</label>
							<input type="text" className="form-control" id="cognome" placeholder="cognome" {...register("cognome ")} />
						</div>
					</div>
					<div className='col-2'>
						<label className="form-label mb-3">Sesso</label>
						<Sesso />
					</div>
				</div>
				<div className='row'>
					<div className='col-5'>
						<label className="form-label mb-3">Data di Nascita</label>
						<DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
					</div>

				</div>
				<div className='row'>
					<div className='col-4'>
						<input type="submit" />
					</div>
				</div>
			</div>
		</form>

	)
}

export default CodiceFiscale