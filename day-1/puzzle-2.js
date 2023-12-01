const fs = require('fs');

const inputData = fs.readFileSync('./input-1.txt', {encoding: 'utf-8'});

let total = 0;

const numMap = {
    "one": "o1e",
    "two": "t2o",
    "three": "t3e",
    "four": "f4r",
    "five": "f5e",
    "six": "s6x",
    "seven": "s7n",
    "eight": "e8t",
    "nine": "n9e",
}

function cleanInput(dirtyInput) {
    for (stringNum of Object.keys(numMap)){
        dirtyInput = dirtyInput.replaceAll(stringNum, numMap[stringNum])
    }
    return dirtyInput
}
const cleanedInput = cleanInput(inputData).split('\n');

for (line of cleanedInput) {
    const nums = line.match(/\d/g);
    total += parseInt(nums[0]) * 10;
    total += parseInt(nums[nums.length - 1]);

}

console.log(total);


