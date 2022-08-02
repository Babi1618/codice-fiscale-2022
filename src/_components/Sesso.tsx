import Form from 'react-bootstrap/Form';

function Sesso() {
	return (
		<Form.Select aria-label="Default select example">
			<option>Selezionare un genere</option>
			<option value="M">Maschile</option>
			<option value="F">Femminile</option>
			{/* <option value="3">Three</option> */}
		</Form.Select>
	);
}

export default Sesso;