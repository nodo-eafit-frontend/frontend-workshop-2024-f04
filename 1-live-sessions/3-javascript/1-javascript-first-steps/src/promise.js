const verPedido = () => {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve('Maleta Llegó');
		}, 5000);
	});

	return promise;
};

(async () => {
	let paquete = 'Esperando...';
	console.log(paquete, 1);
	console.log(paquete, 2);

	paquete = await verPedido();

	console.log(paquete, 3);
	console.log(paquete, 4);

	return paquete;
})();
