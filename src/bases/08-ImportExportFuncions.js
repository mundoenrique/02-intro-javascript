import cantantes, { generos } from '../data/cantantes';
import { heroes, owners } from '../data/heroes';
import cosas from '../data/piezas';

function ImportExportFuncions() {
	return (
		<>
			<h2>Importaciones, exportaciones y funciones</h2>
			<p>heroes por id = 2: {JSON.stringify(getHeroreById(2))}</p>
			<p>heroes por owner = DC: {JSON.stringify(getHeroreByOwner('DC'))}</p>
			<p>Owners {JSON.stringify(owners)}</p>
			<p>Piezas {JSON.stringify(cosas)}</p>
			<p>Cantantes {JSON.stringify(cantantes)}</p>
			<p>Generos {JSON.stringify(generos)}</p>
		</>
	);
}

export const getHeroreById = (id) => heroes.find((heroe) => heroe.id === id);
export const getHeroreByOwner = (owner) =>
	heroes.filter((heroe) => heroe.owner === owner);

export default ImportExportFuncions;
