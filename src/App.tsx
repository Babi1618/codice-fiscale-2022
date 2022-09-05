import './App.css';
import moment from 'moment'
import { useEffect } from 'react';
import { useCalcolaCodiceFiscale } from './_hooks/useCalcolaCodiceFiscale';

function App() {

	const { codiceFiscale_calcolato } = useCalcolaCodiceFiscale()
	useEffect(() => {
		console.log(codiceFiscale_calcolato())
	}, [])

	return (
		< >
		</>

	);
}

export default App;
