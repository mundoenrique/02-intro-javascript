import { getImg } from '../helpers/globalVar';

export default function AsyncAwait() {
	getImg();

	return (
		<>
			<h2>Async Await</h2>
			<img id="img-data" alt="mi imagen" width="120px" height="120px" />
		</>
	);
}
