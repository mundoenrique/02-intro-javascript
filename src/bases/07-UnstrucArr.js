
export default function UnstrucArr() {
	const personajes = ['Goku', 'Vegeta', 'Trunks'];
	const [goku, vegeta, trunks] = personajes

	const retornaArreglo = () => ['ABC', 123];
	const [letras, numeros] = retornaArreglo();

	const useState = (valor) => {
		return [valor, () => 'Hola mundo']
	}

	const [nombre, setNombre] = useState('Guku');

	return (
		<>
			<h2>Desestructuración de arreglos</h2>
			<p>Personajes: {goku}, {vegeta}, {trunks} </p>
			<p>Arreglo: {letras}, {numeros} </p>
			<p>UseState: {nombre} </p>
			<p>UseState: {setNombre()} </p>
		</>
	)
}
