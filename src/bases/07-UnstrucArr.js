const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [goku, vegeta, trunks] = personajes;

export const retornaArreglo = () => ['ABC', 123];
const [letters, numbers] = retornaArreglo();

const usState = (valor) => {
	return [valor, () => 'Hola mundo'];
};

const [nombre, setNombre] = usState('Guku');

export default function UnstrucArr() {
	return (
		<>
			<h2>Desestructuración de arreglos</h2>
			<p>
				Personajes: {goku}, {vegeta}, {trunks}
			</p>
			<p>
				Arreglo: {letters}, {numbers}
			</p>
			<p>UseState: {nombre} </p>
			<p>UseState: {setNombre()} </p>
		</>
	);
}
