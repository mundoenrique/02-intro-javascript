function Functions() {
	// Función nombrada
	function saludar1(nombre) {
		return `Hola ${nombre}`;
	}

	// Función nombrada en constante
	const saludar2 = function (nombre) {
		return `Hola ${nombre}`;
	};

	// Fucnción de flecha con return explicito
	const saludar3 = (nombre) => {
		return `Hola ${nombre}`;
	};

	// Fucnción de flecha con return implicito
	// Si solo recibe un parametro, se puede omitir los parentesis
	// Si solo tiene una linea de codigo, se puede omitir los llaves y el return
	const saludar4 = (nombre) => `Hola ${nombre}`;

	// Función de flecha con return explicito sin parametros
	const usuario1 = () => {
		return {
			uid: 'ABC123',
			userName: 'mundoenrique',
		};
	};

	// Función de flecha con return implicito sin parametros
	// Si returna un objeto se debe encerrar en parentesis el onjeto
	const usuario2 = () => ({
		uid: 'ABC124',
		userName: 'yayita',
	});

	// Función de flecha con return implicito con un parametro
	// Si solo recibe un parametro, se puede omitir los parentesis
	// Para devolver un atributo con el mismo nombre de la variabble, solo escribir el nombre de la variable
	const usuarioActivo = (user) => ({
		uid: 'ABC124',
		user,
		userName: user,
	});

	return (
		<>
			<h2>Funciones</h2>
			<p>Función saludar 1: {saludar1('Yajaira')}</p>
			<p>Función saludar 2: {saludar2('Shamyr')}</p>
			<p>Función saludar 3: {saludar3('Isabel')}</p>
			<p>Función saludar 4: {saludar4('Ruth')}</p>
			<p>Función usuario 1: {JSON.stringify(usuario1())}</p>
			<p>Función usuario 2: {JSON.stringify(usuario2())}</p>
			<p>Función usuario activo: {JSON.stringify(usuarioActivo('tere'))}</p>
		</>
	);
}

export default Functions;
