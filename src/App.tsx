import { useEffect } from 'react';
import { useCalcolaCodiceFiscale } from './_hooks/useCalcolaCodiceFiscale';
import CodiceFiscale from './_components/CodiceFiscale';

function App() {
	const { codiceFiscale_calcolato } = useCalcolaCodiceFiscale()
	useEffect(() => {
		console.log(codiceFiscale_calcolato())
	}, [])
	return (
		< >
			<CodiceFiscale />
		</>

	);
}

export default App;
