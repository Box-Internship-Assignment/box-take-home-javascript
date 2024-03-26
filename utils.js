'use strict';
const os = require('os');
const fs = require('fs');

module.exports = {
	parseTestCase(path) {
		const lines = fs.readFileSync(path, 'utf8').split('\n');
		let line = lines.shift().trim();
		const initialBoardState = [];
		while (line) {
			const lineParts = line.split(' ');
			initialBoardState.push({piece: lineParts[0], position: lineParts[1]});
			line = lines.shift().trim();
		}
		line = lines.shift().trim();
		const upperCaptures = line.slice(1, -1).split(' ').filter(function (x) { return x.length > 0 });
		line = lines.shift().trim();
		const lowerCaptures = line.slice(1, -1).split(' ').filter(function (x) {return x.length > 0 });
		line = lines.shift().trim();
		line = lines.shift().trim();
		const moves = [];
		while (line) {
			moves.push(line);
			line = lines.shift().trim();
		}
		return {
			initialPieces: initialBoardState,
			upperCaptures: upperCaptures,
			lowerCaptures: lowerCaptures,
			moves: moves
		};
	}
};
