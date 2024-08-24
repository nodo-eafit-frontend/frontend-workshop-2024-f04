import endpoint from './endpoint.js';
import axios from 'axios';
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
export async function getTipsInfo() {
	const url = endpoint.tipsInfo();
	const options = {
		signal: AbortSignal.timeout(endpoint.timeout),
	};

	try {
		const response = await axios.get(url, options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
	}

	

	export async function getTipsInfo() {
		const url = endpoint.tipsInfo();
		const options = {
			signal: AbortSignal.timeout(endpoint.timeout),
		};
		
		try {
			const response = await fetch(url, options);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
		}
		}
