'use strict';
const os = require('os');

/**
 * Class that represents the BoxShogi board
 */
class Board {
	constructor() {
		this.BOARD_SIZE = 5;
		this.board = this.initializeEmptyBoard();
	}

	initializeEmptyBoard() {
		// To do: initialize board
	}

	/**
	 * Utility function for printing the board
	 * @returns {string}
	 */
	printBoard() {
		let str = '';
		for (let row = this.BOARD_SIZE - 1; row >= 0; row--) {
			str += `${row + 1} |`;
			for (let col = 0; col < this.BOARD_SIZE; col++) {
				str += this.stringifySquare(this.board[col][row]);
			}
			str += os.EOL;
		}
		str += `    a  b  c  d  e${os.EOL}`;
		process.stdout.write(str);
	}

	/**
	 * Utility function for stringifying an individual square on the board
	 * @param square - array of strings
	 * @returns {string}
	 */
	stringifySquare(square) {
	    if (typeof square !== 'string' || square.length > 2) {
	        throw new Error('Board must be an array of strings, e.g., "", "P", or "+P"');
	    }
	    switch(square.length) {
	        case 0:
	            return '__|';
	        case 1:
	            return ` ${square}|`;
	        case 2:
	            return `${square}|`;
	    }
	}
}

module.exports = Board;
