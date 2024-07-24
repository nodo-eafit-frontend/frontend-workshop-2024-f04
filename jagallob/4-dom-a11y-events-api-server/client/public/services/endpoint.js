const endpoint = {
	scheme: 'http://',
	domain: `localhost`,
	port: 4000,
	timeout: 5000,
	stats: function () {
		return `${this.scheme}${this.domain}:${this.port}/stats`;
	},
	gameInfo: function (queryParams) {
		const url = `${this.scheme}${this.domain}:${this.port}/game-info`;

		return queryParams ? `${url}?${queryParams}` : url;
	},
	tipsInfo: function () {
		return `${this.scheme}${this.domain}:${this.port}/tips-info`;
	},
};

export default endpoint;



