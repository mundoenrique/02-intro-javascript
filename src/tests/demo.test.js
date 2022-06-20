/**
 * Arrange (Organizar/Inicializa) => inicializa los objetos y establece los valores de los datos que vamos a utilizar en el Test que lo
 * contiene.
 * Act (Actuar) => realiza la llamada al método a probar con los parámetros preparados para tal fin.
 * Assert (Confirmar/Comprobar) => comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.
 */
describe('Pruebas demostratación', () => {
	test('Esta prueba no debe fallar', () => {
		//Arrange
		const message1 = 'Hola Mundo';
		//Act
		const message2 = message1.trim();
		//Assert
		expect(message1).toBe(message2);
	});
});
