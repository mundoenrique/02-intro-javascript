const array1 = [1, 2, 3, 4];
const array2 = array1;
array2.push(5);
const array3 = [...array1, 6];

const array4 = array3.map((val) => {
	return val * 2;
});

export default function Arrays() {
	return (
		<>
			<h2>Manejo de Arreglos</h2>
			<p>Arreglo 1 {JSON.stringify(array1)}</p>
			<p>Arreglo 2 {JSON.stringify(array2)}</p>
			<p>Arreglo 3 {JSON.stringify(array3)}</p>
			<p>Arreglo 4 {JSON.stringify(array4)}</p>
		</>
	);
}
