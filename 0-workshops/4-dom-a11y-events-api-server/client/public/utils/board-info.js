let seconds = 0;
let minutes = 0;
let intervalTimerId;

export const startTimer = (timeEl, callback) => {
	intervalTimerId = setInterval(() => {
		seconds++;

		if (seconds === 60) {
			seconds = 0;
			minutes++;
		}

		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

		timeEl.textContent = `${formattedMinutes}:${formattedSeconds}`;

		callback(minutes, seconds);
	}, 1000);
};

export const stopTimer = () => {
	clearInterval(intervalTimerId);
};

// string | object
export const getParamsObject = (searchParams) => {
	const urlParams = new URLSearchParams(searchParams);
	const params = Object.fromEntries(urlParams.entries());

	return params;
};

export const calculateScore = (props) => {
	const { withTime, time, difficulty, gameInfo, moves } = props;
	const { baseScore, timePenalty, movePenalty, movePenaltyWithoutTime, difficultyInfo } = gameInfo;
	const { minutes, seconds } = time;
	let scoreByTime = 0;
	let scoreByMove = 0;
	let score = 0;
	const penaltyByMove = withTime ? movePenalty : movePenaltyWithoutTime;

	scoreByMove = penaltyByMove * moves;

	if (withTime) {
		const totalTime = minutes * 60 + seconds; // Convert minutes to seconds and add seconds

		scoreByTime = timePenalty * totalTime;
	}

	score = baseScore - scoreByTime - scoreByMove;
	score *= difficultyInfo[difficulty].bonus; // Apply difficulty bonus

	return score > 0 ? Math.floor(score) : 0;
};
