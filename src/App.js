import LetAndConst from './bases/01-letAndConst';
import TemplateString from './bases/02-TemplateString';
import LiteralObjects from './bases/03-LiteralObjects';
import Arrays from './bases/04-Arrays';
import Functions from './bases/05-Functions';
import ImportExportFuncions from './bases/08-ImportExportFuncions';
import Promises from './bases/09-Promises';
import FetchApi from './bases/10-FetchApi';

function App() {
	return (
		<>
			<h1>Fundamentos de javascript</h1>
			<br />
			<hr />
			<LetAndConst />
			<br />
			<hr />
			<TemplateString />
			<br />
			<hr />
			<LiteralObjects />
			<br />
			<hr />
			<Arrays />
			<br />
			<hr />
			<Functions />
			<br />
			<hr />
			<ImportExportFuncions />
			<br />
			<hr />
			<Promises />
			<br />
			<hr />
			<FetchApi />
		</>
	);
}

export default App;
