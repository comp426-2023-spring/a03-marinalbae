#!/usr/bin/env node
import minimist from 'minimist';
import { rpsls } from 'lib/rpsls.js';

var args = minimist(process.argv.slice(2));

if (args.h || args.help) {
	helpM();
	process.exit(0);
}
if (args.r || args.rules) {
	rulesM();
	process.exit(0);
}

function helpM() {
	console.log('Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n',
		'  -h, --help        display this help message and exit\n',
		'  -r, --rules       display the rules and exit\n\nExamples:\n',
		'  node-rpsls        Return JSON with single player RPSLS result.\n',
		'                    e.g. {"player":"rock"}\n',
		'  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n',
		'                    e.g {"player":"rock","opponent":"Spock","result":"lose"}');
}
function rulesM() {
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n',
		' - Scissors CUTS Paper\n',
		' - Paper COVERS Rock\n',
		' - Rock SMOOSHES Lizard\n',
		' - Lizard POISONS Spock\n',
		' - Spock SMASHES Scissors\n',
		' - Scissors DECAPITATES Lizard\n',
		' - Lizard EATS Paper\n',
		' - Paper DISPROVES Spock\n',
		' - Spock VAPORIZES Rock\n',
		' - Rock CRUSHES Scissors');
}

var move = args._[0];

try {
	result = rpsls(move);
	console.log(JSON.stringify(result));
} catch (e) {
	console.log('Invalid entry!\n\n');
	helpM();
	rulesM();
	process.exit(0);
}

