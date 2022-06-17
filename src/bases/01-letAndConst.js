export default function LetAndConst() {
	const nombre = 'Enrique';
	const apellido = 'Peñaloza';
	let valorDado = 5;
	valorDado = 6;

	const scopeVar = () => {
		const nombre = 'Yayita';

		return nombre;
	};

	return (
		<>
			<h2>Varibles y constantes</h2>
			<p>Nombre: "{nombre}"</p>
			<p>Apellido: "{apellido}"</p>
			<p>valorDado: "{valorDado}"</p>
			<p>Variable de scope "{scopeVar()}"</p>
		</>
	);
}
