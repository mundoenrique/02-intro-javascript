function LiteralObjects() {
	const persona = {
		nombre: 'Enrique',
		apellido: 'Peñaloza',
		edad: 45,
		dirección: {
			ciudad: 'Caracas',
			zip: 1010,
			lat: 14.4564,
			lng: 25.4568,
		},
	};
	const persona2 = persona;
	persona2.nombre = 'Jesús';
	const persona3 = { ...persona };
	persona3.nombre = 'yayita';
	persona3.apellido = 'Epinoza';

	return (
		<>
			<h2>Manejo de objetos</h2>
			<p>Persona {JSON.stringify(persona)}</p>
			<p>Persona 2 {JSON.stringify(persona2)}</p>
			<p>Persona 3 {JSON.stringify(persona3)}</p>
		</>
	);
}

export default LiteralObjects;
