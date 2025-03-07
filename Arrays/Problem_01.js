function getRandom3DigitNumber() {
    return Math.floor(Math.random() * 900) + 100; // 100 to 999
}

const numbers = Array.from({ length: 10 }, getRandom3DigitNumber);
console.log("Generated Numbers:", numbers);

let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

// Find largest & smallest
for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
    
    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
    }
}

console.log(`2nd Largest: ${secondLargest}`);
console.log(`2nd Smallest: ${secondSmallest}`);
