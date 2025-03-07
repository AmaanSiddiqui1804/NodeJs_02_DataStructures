// 5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
// etc and store them in an array

const repeatedDigits = [];

for (let i = 11; i < 100; i += 11) { 
    repeatedDigits.push(i);
}

console.log("Repeated Digit Numbers:", repeatedDigits);
