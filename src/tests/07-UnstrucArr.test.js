import { retornaArreglo } from '../bases/07-UnstrucArr';

describe('Pruebas en <UnstrucArr />', () => {
	test('Debe retornar un string y un número', () => {
		const [letters, numbers] = retornaArreglo();

		expect(letters).toBe('ABC');
		expect(typeof letters).toBe('string');
		expect(letters).toEqual(expect.any(String));
		expect(numbers).toBe(123);
		expect(typeof numbers).toBe('number');
		expect(numbers).toStrictEqual(expect.any(Number));
	});
});
