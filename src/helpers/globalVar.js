/**
 * Credenciales giphy developer https://developers.giphy.com
 * enrique.novopayment@getDefaultNormalizer.com
 * -Teresa82
 */

export const apiKey = '0217r4ACrFCgiLtHcbgsrd4I3iE8Ndrv';

export function requestImage() {
	const request = fetch(
		`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
	);
	/* request.then(resp => {
		resp.json().then(console.log)
	})
	request.catch(console.warn); */
	request
		.then((resp) => resp.json())
		.then(({ data }) => {
			const { url } = data.images.original;
			const img = document.getElementById('my-img');
			img.src = url;
		})
		.catch((error) => {
			console.war(error);
		});
}

export async function getImg() {
	try {
		const request = await fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
		);
		const { data } = await request.json();
		const { url } = await data.images.original;

		const img = document.getElementById('img-data');
		if (img) {
			img.src = url;
		}

		return url;
	} catch (error) {
		console.warn(error);
		return 'No se obtuvo all url';
	}
}
