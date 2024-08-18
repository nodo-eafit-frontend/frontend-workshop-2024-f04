export function closeModal(modalId) {
	const modalEl = document.getElementById(modalId);

	modalEl.close(modalId);
}

export function openModal(modalId, time, callback) {
	const modalEl = document.getElementById(modalId);

	modalEl.showModal(modalId);

	if (time) {
		setTimeout(() => {
			closeModal(modalId);
			callback();
		}, time);
	}
}
