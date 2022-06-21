import { getImg } from '../../helpers/globalVar';

describe('Pruebas en <AsyncAwait />', () => {
	test('getImg debe retornar la url de una imagen', async () => {
		const url = await getImg();
		expect(typeof url).toBe('string');
	});
});
