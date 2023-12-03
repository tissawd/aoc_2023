const fs = require('fs');

const inputData = fs.readFileSync('./input.txt', {encoding: 'utf-8'}).split('\n');
regex = new RegExp('\\d+ (?:red|green|blue)', 'gi');
let total = 0;

for (game of inputData) {
    let scores = game.match(regex);
    let minCubes = {
        'red': 0,
        'green': 0,
        'blue': 0,
    }
    for (score of scores) {
        let scoreArray = score.split(' ');
        if (minCubes[scoreArray[1]] < parseInt(scoreArray[0])) {
            minCubes[scoreArray[1]] = scoreArray[0];
        }
    }
    total += (minCubes.red * minCubes.blue * minCubes.green);
}

console.log(total);
