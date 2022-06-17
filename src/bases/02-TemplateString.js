function TemplateString() {
	const nombre = 'Enrique';
	const apellido = 'Peñaloza';
	const nombreCompleto = nombre + ' ' + apellido;
	const nombreCompleto2 = `${nombre} ${apellido}`;

	const getSaludo = (usuario) => {
		return `Bienvenido ${usuario}`;
	};

	return (
		<>
			<h2>Manejo de cadenas de texto</h2>
			<p>Nombre: {nombre}</p>
			<p>Apellido: {apellido}</p>
			<p>Nombre completo: {nombreCompleto} </p>
			<p>Nombre completo 2: {nombreCompleto2} </p>
			<p>Saludo: {getSaludo(nombreCompleto2)} </p>
		</>
	);
}

export default TemplateString;
