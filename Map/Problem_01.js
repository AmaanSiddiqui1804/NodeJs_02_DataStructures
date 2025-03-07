
// 1. Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times and the one that was for
// minimum times

function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Random number between 1 to 6
}

const rollCounts = new Map(); //Map to store count of each number
let maxCount = 10;

//  count map
for (let i = 1; i <= 6; i++) {
    rollCounts.set(i, 0);
}

//rolling until one number reaches 10 times
let reachedMax = false;
while (!reachedMax) {
    let roll = rollDie();
    rollCounts.set(roll, rollCounts.get(roll) + 1);

    if (rollCounts.get(roll) === maxCount) {
        reachedMax = true;
    }
}

console.log("Final Counts:", Object.fromEntries(rollCounts));

// Find max & min occurrences
let maxNum = null, minNum = null;
let maxVal = -Infinity, minVal = Infinity;

for (let [num, count] of rollCounts.entries()) {
    if (count > maxVal) {
        maxVal = count;
        maxNum = num;
    }
    if (count < minVal) {
        minVal = count;
        minNum = num;
    }
}

console.log(`Number that appeared max times (${maxVal} times): ${maxNum}`);
console.log(`Number that appeared min times (${minVal} times): ${minNum}`);
