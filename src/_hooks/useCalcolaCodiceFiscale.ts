export const useCalcolaCodiceFiscale = () => {
	const dati_personali = {
		nome: "Gino",
		cognome: "Rossi",
		genere: "M",
		data_nascita: "15/05/1985",
		comune_o_stato_estero_nascita: "A944",
	}

	const cognome_calcola = (input_cognome: string) => {
		let cognome = input_cognome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
		let consonanti: any = cognome.match(/[^aeiou ]/gi); //NB: ho tolto spazi e vocali
		let vocali: any = cognome.match(/[aeiou]/gi);
		if (consonanti?.length >= 3) {
			return [consonanti[0], consonanti[1], consonanti[2]]
		}
		else {
			let lettere: any = []
			for (let i = 0; i < consonanti?.length; i++) {
				lettere.push(consonanti[i])
			}
			for (let i = 0; i < vocali?.length; i++) {
				lettere.push(vocali[i])
			}
			if (lettere.length >= 3) {
				return [lettere[0], lettere[1], lettere[2]]
			}
			else {
				lettere.push("X", "X")
				return [lettere[0], lettere[1], lettere[2]]
			}
		}
	}

	const nome_calcola = (input_nome: string) => {
		let nome = input_nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
		let consonanti: any = nome.match(/[^aeiou ]/gi); //NB: ho tolto spazi e vocali
		let vocali: any = nome.match(/[aeiou]/gi);
		if (consonanti?.length > 3) {
			return [consonanti[0], consonanti[2], consonanti[3]]
		}
		else if (consonanti?.length === 3) {
			return [consonanti[0], consonanti[1], consonanti[2]]
		}
		else {
			let lettere: any = []
			for (let i = 0; i < consonanti?.length; i++) {
				lettere.push(consonanti[i])
			}
			for (let i = 0; i < vocali?.length; i++) {
				lettere.push(vocali[i])
			}
			if (lettere.length >= 3) {
				return [lettere[0], lettere[1], lettere[2]]
			}
			else {
				lettere.push("X", "X")
				return [lettere[0], lettere[1], lettere[2]]
			}
		}
	}
	const data_nascita_calcola = (input_data_nascita: string, input_genere: string) => {
		let output_data_nascita: any = []
		if (input_data_nascita !== null) {
			let data_nascita: any = input_data_nascita.split("/")
			let giorno: any = String(data_nascita[0])
			if (input_genere === "F") {
				giorno = parseInt(giorno) + 40
			}
			giorno = String(giorno).split("")
			let mese: any = []
			switch (data_nascita[1]) {
				case "01": mese.push("A")
					break;
				case "02": mese.push("B")
					break;
				case "03": mese.push("C")
					break;
				case "04": mese.push("D")
					break;
				case "05": mese.push("E")
					break;
				case "06": mese.push("H")
					break;
				case "07": mese.push("L")
					break;
				case "08": mese.push("M")
					break;
				case "09": mese.push("P")
					break;
				case "10": mese.push("R")
					break;
				case "11": mese.push("S")
					break;
				case "12": mese.push("T")
					break
			}
			let anno: any = [data_nascita[2].split("")[2], data_nascita[2].split("")[3]]
			output_data_nascita.push(anno[0], anno[1], mese[0], giorno[0], giorno[1])
		}
		return output_data_nascita
	}

	const CIN_calcola = () => {
		let valore_controllo = 0
		let carattere_controllo = "";
		let nome = nome_calcola(dati_personali.nome)
		let cognome = cognome_calcola(dati_personali.cognome)
		let data_nascita = data_nascita_calcola(dati_personali.data_nascita, dati_personali.genere)
		let comune_o_stato_estero_nascita = dati_personali.comune_o_stato_estero_nascita.toUpperCase().split("")
		let dati: any = cognome.concat(nome).concat(data_nascita).concat(comune_o_stato_estero_nascita)
		// console.log("dati ", dati)
		let sommaDispari = 0;
		let sommaPari = 0;

		for (let i = 0; i < dati.length; i++) {
			if (i % 2 === 0) {
				switch (dati[i]) { //dispari(NB: i parte da zero)
					//numeri 
					case "0": sommaDispari = sommaDispari + 1;
						break;
					case "1": sommaDispari = sommaDispari + 0;
						break;
					case "2": sommaDispari = sommaDispari + 5;
						break;
					case "3": sommaDispari = sommaDispari + 7;
						break;
					case "4": sommaDispari = sommaDispari + 9;
						break;
					case "5": sommaDispari = sommaDispari + 13;
						break;
					case "6": sommaDispari = sommaDispari + 15;
						break;
					case "7": sommaDispari = sommaDispari + 17;
						break;
					case "8": sommaDispari = sommaDispari + 19;
						break;
					case "9": sommaDispari = sommaDispari + 21;
						break;
					//A-H
					case "A": sommaDispari = sommaDispari + 1;
						break;
					case "B": sommaDispari = sommaDispari + 0;
						break;
					case "C": sommaDispari = sommaDispari + 5;
						break;
					case "D": sommaDispari = sommaDispari + 7;
						break;
					case "E": sommaDispari = sommaDispari + 9;
						break;
					case "F": sommaDispari = sommaDispari + 13;
						break;
					case "G": sommaDispari = sommaDispari + 15;
						break;
					case "H": sommaDispari = sommaDispari + 17;
						break;
					//I-Q
					case "I": sommaDispari = sommaDispari + 19;
						break;
					case "J": sommaDispari = sommaDispari + 21;
						break;
					case "K": sommaDispari = sommaDispari + 2;
						break;
					case "L": sommaDispari = sommaDispari + 4;
						break;
					case "M": sommaDispari = sommaDispari + 18;
						break;
					case "N": sommaDispari = sommaDispari + 20;
						break;
					case "O": sommaDispari = sommaDispari + 11;
						break;
					case "P": sommaDispari = sommaDispari + 3;
						break;
					case "Q": sommaDispari = sommaDispari + 6;
						break;
					//R-Z
					case "R": sommaDispari = sommaDispari + 8;
						break;
					case "S": sommaDispari = sommaDispari + 12;
						break;
					case "T": sommaDispari = sommaDispari + 14;
						break;
					case "U": sommaDispari = sommaDispari + 16;
						break;
					case "V": sommaDispari = sommaDispari + 10;
						break;
					case "W": sommaDispari = sommaDispari + 22;
						break;
					case "X": sommaDispari = sommaDispari + 25;
						break;
					case "Y": sommaDispari = sommaDispari + 24;
						break;
					case "Z": sommaDispari = sommaDispari + 23;
						break;
				}
			}
			else { //PARI
				switch (dati[i]) {
					//numeri 
					case "0": sommaPari = sommaPari + 0;
						break;
					case "1": sommaPari = sommaPari + 1;
						break;
					case "2": sommaPari = sommaPari + 2;
						break;
					case "3": sommaPari = sommaPari + 3;
						break;
					case "4": sommaPari = sommaPari + 4;
						break;
					case "5": sommaPari = sommaPari + 5;
						break;
					case "6": sommaPari = sommaPari + 6;
						break;
					case "7": sommaPari = sommaPari + 7;
						break;
					case "8": sommaPari = sommaPari + 8;
						break;
					case "9": sommaPari = sommaPari + 9;
						break;
					//A-H
					case "A": sommaPari = sommaPari + 0;
						break;
					case "B": sommaPari = sommaPari + 1;
						break;
					case "C": sommaPari = sommaPari + 2;
						break;
					case "D": sommaPari = sommaPari + 3;
						break;
					case "E": sommaPari = sommaPari + 4;
						break;
					case "F": sommaPari = sommaPari + 5;
						break;
					case "G": sommaPari = sommaPari + 6;
						break;
					case "H": sommaPari = sommaPari + 7;
						break;
					//I-Q
					case "I": sommaPari = sommaPari + 8;
						break;
					case "J": sommaPari = sommaPari + 9;
						break;
					case "K": sommaPari = sommaPari + 10;
						break;
					case "L": sommaPari = sommaPari + 11;
						break;
					case "M": sommaPari = sommaPari + 12;
						break;
					case "N": sommaPari = sommaPari + 13;
						break;
					case "O": sommaPari = sommaPari + 14;
						break;
					case "P": sommaPari = sommaPari + 15;
						break;
					case "Q": sommaPari = sommaPari + 16;
						break;
					//R-Z
					case "R": sommaPari = sommaPari + 17;
						break;
					case "S": sommaPari = sommaPari + 18;
						break;
					case "T": sommaPari = sommaPari + 19;
						break;
					case "U": sommaPari = sommaPari + 20;
						break;
					case "V": sommaPari = sommaPari + 21;
						break;
					case "W": sommaPari = sommaPari + 22;
						break;
					case "X": sommaPari = sommaPari + 23;
						break;
					case "Y": sommaPari = sommaPari + 24;
						break;
					case "Z": sommaPari = sommaPari + 25;
						break;
				}
			}
		}
		valore_controllo = (sommaDispari + sommaPari) % 26
		switch (valore_controllo) {
			case 0: carattere_controllo = "A";
				break;
			case 1: carattere_controllo = "B";
				break;
			case 2: carattere_controllo = "C";
				break;
			case 3: carattere_controllo = "D";
				break;
			case 4: carattere_controllo = "E";
				break;
			case 5: carattere_controllo = "F";
				break;
			case 6: carattere_controllo = "G";
				break;
			case 7: carattere_controllo = "H";
				break;
			case 8: carattere_controllo = "I";
				break;
			case 9: carattere_controllo = "J";
				break;
			case 10: carattere_controllo = "K";
				break;
			case 11: carattere_controllo = "L";
				break;
			case 12: carattere_controllo = "M";
				break;
			case 13: carattere_controllo = "N";
				break;
			case 14: carattere_controllo = "O";
				break;
			case 15: carattere_controllo = "P";
				break;
			case 16: carattere_controllo = "Q";
				break;
			case 17: carattere_controllo = "R";
				break;
			case 18: carattere_controllo = "S";
				break;
			case 19: carattere_controllo = "T";
				break;
			case 20: carattere_controllo = "U";
				break;
			case 21: carattere_controllo = "V";
				break;
			case 22: carattere_controllo = "W";
				break;
			case 23: carattere_controllo = "X";
				break;
			case 24: carattere_controllo = "Y";
				break;
			case 25: carattere_controllo = "Z";
				break;
		}
		return carattere_controllo
	}

	const codiceFiscale_calcolato = () => {
		let nome = nome_calcola(dati_personali.nome)
		let cognome = cognome_calcola(dati_personali.cognome)
		let data_nascita = data_nascita_calcola(dati_personali.data_nascita, dati_personali.genere)
		let comune_o_stato_estero_nascita = dati_personali.comune_o_stato_estero_nascita.toUpperCase().split("")
		let carattere_controllo = CIN_calcola()
		let dati: any = cognome.concat(nome).concat(data_nascita).concat(comune_o_stato_estero_nascita).concat(carattere_controllo)
		return dati.join("")
	}

	return {
		codiceFiscale_calcolato
	}
}