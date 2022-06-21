import { getImg } from '../helpers/globalVar';

getImg();

export default function AsyncAwait() {
	return (
		<>
			<h2>Async Await</h2>
			<img id="img-data" alt="mi imagen" width="120px" height="120px" />
		</>
	);
}
