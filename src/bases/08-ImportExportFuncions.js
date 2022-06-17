import cantantes, { generos } from '../data/cantantes';
import { heroes, owners } from '../data/heroes';
import cosas from '../data/piezas';

export default function ImportExportFuncions() {
	return (
		<>
			<h2>Importaciones, exportaciones y funciones</h2>
			<p>heroes por Identificador = 2: {JSON.stringify(getHeroreById(2))}</p>
			<p>
				heroes por propietario = DC: {JSON.stringify(getHeroreByOwner('DC'))}
			</p>
			<p>propietarios {JSON.stringify(owners)}</p>
			<p>Piezas {JSON.stringify(cosas)}</p>
			<p>Cantantes {JSON.stringify(cantantes)}</p>
			<p>Géneros {JSON.stringify(generos)}</p>
		</>
	);
}

export const getHeroreById = (id) => heroes.find((heroe) => heroe.id === id);

export const getHeroreByOwner = (owner) =>
	heroes.filter((heroe) => heroe.owner === owner);
