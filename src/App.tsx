import { useEffect } from 'react';
import { useCalcolaCodiceFiscale } from './_hooks/useCalcolaCodiceFiscale';
import { provaSlice } from './_redux/slice';
import { useSelector } from "react-redux"
function App() {
	const prova = useSelector(provaSlice)
	const { codiceFiscale_calcolato } = useCalcolaCodiceFiscale()
	useEffect(() => {
		console.log(codiceFiscale_calcolato())
		console.log(prova)
	}, [])

	return (
		< >
		</>

	);
}

export default App;
