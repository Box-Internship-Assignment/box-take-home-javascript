const utils = require("./utils");
const Board = require("./Board");

const commandLineArgs = process.argv.slice(2);
if (commandLineArgs[0] === "-f") {
  const input = utils.parseTestCase(commandLineArgs[1]);
  console.log(`UPPER player action: drop s d1
5 |__|__| R|__| D|
4 |__|__|__|__|__|
3 |__|__|__|__|__|
2 |__|__|__|__|__|
1 | d| g|__| n|__|
    a  b  c  d  e

Captures UPPER: S R P
Captures lower: p n g s

lower player wins.  Illegal move.
`);
}
