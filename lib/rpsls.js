export { rps, rpsls };

function rps(move) {
	const moves = ['rock', 'paper', 'scissors'];

	if (move == undefined) {
		return {
			'player': moves[Math.floor(Math.random() * moves.length]
		};

	} else if (!moves.includes(move)) {
		throw new RangeError();
	} else {
		move = move.toLowerCase();
		oppMove = moves[Math.flooe(Math.random() * moves.length];
		
		var result = '';
		

		//Tie
		if(move === oppMove) {
			result = 'tie';
		}
		//R v S
		if (move === 'rock' && oppMove === 'scissors') {
			result = 'win';
		}
		//R v P
		if (move === 'rock' && oppMove === 'paper') {
			result = 'lose';
		}
		//P v S
		if (move === 'paper' && oppMove === 'scissors') {
			result = 'lose';
		}
		//P v R
		if (move === 'paper' && oppMove === 'rock') {
			result = 'win';
		}
		//S v R
		if (move === 'scissors' && oppMove === 'rock') {
			result = 'lose';
		}
		//S v P
		if (move === 'scissors' && oppMove === 'paper') {
			result = 'win';
		}
		
		return {
			player: move,
			opponent: oppMove,
			result: result
		};
	}
}
