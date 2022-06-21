import { heroePromise } from '../../bases/09-Promises';

describe('Pruebas en <Promises />', () => {
	test('heroePrmise debe retornat un heroe', (done) => {
		const id = 1;
		heroePromise(id).then((hero) => {
			expect(hero).toEqual({
				id: 1,
				name: 'Batman',
				owner: 'DC',
			});

			done();
		});
	});

	test('heroePrmise debe retornat un error', (done) => {
		const id = 100;
		heroePromise(id).catch((error) => {
			// eslint-disable-next-line jest/no-conditional-expect
			expect(error).toEqual('el heroe no existe');

			done();
		});
	});
});
