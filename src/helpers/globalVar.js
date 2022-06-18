/**
 * Credenciales giphy developer https://developers.giphy.com
 * enrique.novopayment@getDefaultNormalizer.com
 * -Teresa82
 */

export const apiKey = '0217r4ACrFCgiLtHcbgsrd4I3iE8Ndrv';

export async function getImg() {
	try {
		const request = await fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
		);
		const { data } = await request.json();
		const { url } = await data.images.original;

		const img = document.getElementById('img-data');
		img.src = url;
	} catch (error) {
		console.warn(error);
	}
}
