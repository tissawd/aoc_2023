const fs = require('fs');

const inputData = fs.readFileSync('./input.txt', {encoding: 'utf-8'}).split('\n');
regex = new RegExp('\\d+ (?:red|green|blue)', 'gi');
let total = 0;
const limits = {
    'red': 12,
    'green': 13,
    'blue': 14,
}

for (game of inputData) {
    let scores = game.match(regex);
    let possible = true;
    for (score of scores) {
        let scoreArray = score.split(' ');
        if (limits[scoreArray[1]] < parseInt(scoreArray[0])) {
            possible = false;
            break;
        }
    }
    possible ? total += parseInt(game.split(':')[0].split(' ')[1]) : ''
}

console.log(total);
