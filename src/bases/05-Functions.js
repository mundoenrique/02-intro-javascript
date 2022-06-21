export default function Functions() {
	return (
		<>
			<h2>Funciones</h2>
			<p>Función saludar 1: {greeting1('Yajaira')}</p>
			<p>Función saludar 2: {greeting2('Shamyr')}</p>
			<p>Función saludar 3: {greeting3('Isabel')}</p>
			<p>Función saludar 4: {greeting4('Ruth')}</p>
			<p>Función usuario 1: {JSON.stringify(getUser1())}</p>
			<p>Función usuario 2: {JSON.stringify(getUser2())}</p>
			<p>Función usuario activo: {JSON.stringify(activeUser('tere'))}</p>
		</>
	);
}

// Función nombrada
function greeting1(nombre) {
	return `Hola ${nombre}`;
}

// Función nombrada en constante
const greeting2 = function (nombre) {
	return `Hola ${nombre}`;
};

// Fucnción de flecha con return explicito
const greeting3 = (nombre) => {
	return `Hola ${nombre}`;
};

// Fucnción de flecha con return implicito
// Si solo recibe un parametro, se puede omitir los parentesis
// Si solo tiene una linea de codigo, se puede omitir los llaves y el return
const greeting4 = (nombre) => `Hola ${nombre}`;

// Función de flecha con return explicito sin parametros
const getUser1 = () => {
	return {
		uid: 'ABC123',
		userName: 'mundoenrique',
	};
};

// Función de flecha con return implicito sin parametros
// Si returna un objeto se debe encerrar en parentesis el objeto
export const getUser2 = () => ({
	uid: 'ABC124',
	userName: 'yayita',
});

// Función de flecha con return implicito con un parametro
// Si solo recibe un parametro, se puede omitir los parentesis
// Para devolver un atributo con el mismo nombre de la variabble, solo escribir el nombre de la variable
export const activeUser = (user) => ({
	uid: 'ABC124',
	user,
	userName: user,
});
