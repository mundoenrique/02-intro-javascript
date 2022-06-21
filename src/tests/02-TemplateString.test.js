import { getGreeting } from '../bases/02-TemplateString';

describe('Pruebas en <TemplateString />', () => {
	test('getGreeting debe retornar "Bienvenido Enrique Peñaloza"', () => {
		//Arrange
		const nombre = 'Enrique';
		const apellido = 'Peñaloza';
		const nombreCompleto = `${nombre} ${apellido}`;

		const greeting = getGreeting(nombreCompleto);

		expect(greeting).toBe(`Bienvenido ${nombreCompleto}`);
	});
});
