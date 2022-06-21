import { getGreeting } from '../bases/02-TemplateString';

describe('Pruebas en <TemplateString />', () => {
	test('getGreeting debe retornar "Bienvenido Enrique Peñaloza"', () => {
		//Arrange
		const nombre = 'Enrique';
		const apellido = 'Peñaloza';
		const nombreCompleto2 = `${nombre} ${apellido}`;

		const greeting = getGreeting(nombreCompleto2);

		console.log(greeting);
	});
});
