import { activeUser, getUser2 } from '../../bases/05-Functions';

describe('Prueba en <Functions />', () => {
	test('getUser2 debe retornar un objeto', () => {
		const testUser = {
			uid: 'ABC124',
			userName: 'yayita',
		};

		const user = getUser2();

		expect(user).toEqual(testUser);
	});

	test('activeUser debe retornar un objeto', () => {
		const name = 'tere';

		const testUser2 = {
			uid: 'ABC124',
			user: name,
			userName: name,
		};

		const user = activeUser(name);

		expect(user).toStrictEqual(testUser2);
	});
});
