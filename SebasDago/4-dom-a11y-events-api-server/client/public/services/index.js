import endpoint from './endpoint.js';

export const getGameInfo = async () => {
	const url = endpoint.gameInfo();
	const options = { signal: AbortSignal.timeout(endpoint.timeout) };
	let data = {};

	try {
		const response = await fetch(url, options);
		data = await response.json();
	} catch (error) {
		throw error;
	} finally {
		return data;
	}
};

export const saveStats = async (stats) => {
	const url = endpoint.stats();
	let response = {};

	try {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const options = {
			body: JSON.stringify(stats),
			headers: myHeaders,
			method: 'POST',
			signal: AbortSignal.timeout(endpoint.timeout),
		};

		response = await fetch(url, options);
	} catch (error) {
		throw error;
	} finally {
		return response;
	}
};

/**
 * Fetches tips information from the specified endpoint.
 *
 * @returns {Promise<Object>} A promise that resolves with the tips information data or rejects with an error.
 */
export const getTipsInfo = () => {
	const url = endpoint.tipsInfo();
	const options = { signal: AbortSignal.timeout(endpoint.timeout) };

	// TODO: En la función, convierte el uso clase Promise a la notación async y await
	const promise = new Promise((resolve, reject) => {
		fetch(url, options)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});

	return promise;
};
