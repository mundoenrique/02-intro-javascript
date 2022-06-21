const nombre = 'Enrique';
const apellido = 'Peñaloza';
const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto2 = `${nombre} ${apellido}`;

export default function TemplateString() {
	return (
		<>
			<h2>Manejo de cadenas de texto</h2>
			<p>Nombre: {nombre}</p>
			<p>Apellido: {apellido}</p>
			<p>Nombre completo: {nombreCompleto} </p>
			<p>Nombre completo 2: {nombreCompleto2} </p>
			<p>Saludo: {getGreeting(nombreCompleto2)} </p>
		</>
	);
}

export const getGreeting = (usuario) => {
	return `Bienvenido ${usuario}`;
};
