import { apiKey } from '../helpers/globalVar';

export default function FetchApi() {
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
		.catch(console.warn);

	return (
		<>
			<h2>fetchApi</h2>
			<img id="my-img" alt="mi imagen" width="120px" height="120px" />
		</>
	);
}
