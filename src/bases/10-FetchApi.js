import { requestImage } from '../helpers/globalVar';

requestImage();

export default function FetchApi() {
	return (
		<>
			<h2>fetchApi</h2>
			<img id="my-img" alt="mi imagen" width="120px" height="120px" />
		</>
	);
}
