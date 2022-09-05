import { useEffect } from 'react';
import { useCalcolaCodiceFiscale } from './_hooks/useCalcolaCodiceFiscale';
import { provaSlice } from './_redux/slice';
import { useSelector } from "react-redux"
import CodiceFiscale from './_components/CodiceFiscale';
import { FormProvider, useFormContext } from 'react-hook-form/dist/useFormContext';
function App() {
	const prova = useSelector(provaSlice)
	const { codiceFiscale_calcolato } = useCalcolaCodiceFiscale()
	useEffect(() => {
		console.log(codiceFiscale_calcolato())
		// console.log(prova)
	}, [])
	return (
		< >
			<CodiceFiscale />
		</>

	);
}

export default App;
