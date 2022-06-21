import {
	getHeroreById,
	getHeroreByOwner,
} from '../bases/08-ImportExportFuncions';
import { heroes } from '../data/heroes';

describe('Pruebas en <ImportExportFuncions />', () => {
	test('getHeroreById dede retornar u heroe dado in id', () => {
		const id = 1;
		const heroe = getHeroreById(id);

		expect(heroe).toEqual({
			id,
			name: 'Batman',
			owner: 'DC',
		});
	});

	test('getHeroreById dede retornar undefined si el heroe no existe', () => {
		const id = 100;
		const heroe = getHeroreById(id);

		expect(heroe).toBe(undefined);
		expect(heroe).toBeFalsy();
	});

	test('getHeroreByOwner dede retornar un arreglo con los herores de DC', () => {
		const owner = 'DC';
		const heroList = getHeroreByOwner(owner);

		expect(heroList.length).toBe(3);
		expect(heroList).toEqual([
			{ id: 1, name: 'Batman', owner: 'DC' },
			{ id: 3, name: 'Superman', owner: 'DC' },
			{ id: 4, name: 'Flash', owner: 'DC' },
		]);
		expect(heroList).toStrictEqual(
			heroes.filter((heroe) => heroe.owner === owner)
		);
	});

	test('getHeroreByOwner dede retornar un arreglo con los herores de Marvel', () => {
		const owner = 'Marvel';
		const heroList = getHeroreByOwner(owner);

		expect(heroList.length).toBe(2);
		expect(heroList).toStrictEqual([
			{ id: 2, name: 'Spiderman', owner: 'Marvel' },
			{ id: 5, name: 'Wolverine', owner: 'Marvel' },
		]);
		expect(heroList).toStrictEqual(
			heroes.filter((heroe) => heroe.owner === owner)
		);
	});
});
