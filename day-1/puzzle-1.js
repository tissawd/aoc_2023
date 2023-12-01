const fs = require('fs');

const inputData = fs.readFileSync('./input-1.txt', {encoding: 'utf-8'});

let total = 0;

const part1Input = inputData.split('\n');

for (line of part1Input) {
    const nums = line.match(/\d/g);
    total += parseInt(nums[0]) * 10;
    total += parseInt(nums[nums.length - 1]);

}

console.log(total);
