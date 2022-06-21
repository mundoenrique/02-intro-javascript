const activo = true;
const mensaje = !activo ? 'Activo' : 'Incativo';
const mensaje2 = activo && 'Activo';
const mensaje3 = !activo || 'Inactivo';

export default function TernaryOperator() {
	return (
		<>
			<h2>Operador ternario</h2>
			<p>Estado: {mensaje}</p>
			<p>Estado2: {mensaje2}</p>
			<p>Estado3: {mensaje3}</p>
		</>
	);
}
