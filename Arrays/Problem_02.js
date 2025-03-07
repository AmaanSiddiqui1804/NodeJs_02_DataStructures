
function getRandom3DigitNumber() {
    return Math.floor(Math.random() * 900) + 100; // 100 to 999
}

const numbers = Array.from({ length: 10 }, getRandom3DigitNumber);
console.log("Generated Numbers:", numbers);

let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

const sortedNumbers = [...numbers].sort((a, b) => a - b); // Sort in ascending order

console.log("Sorted Numbers:", sortedNumbers);
console.log("2nd Smallest:", sortedNumbers[1]);
console.log("2nd Largest:", sortedNumbers[sortedNumbers.length - 2]);
