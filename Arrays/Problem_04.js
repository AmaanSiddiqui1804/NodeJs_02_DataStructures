//4. Write a Program to show Sum of three Integer adds to ZERO

function findTriplets(arr) {
    let found = false;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log(`Triplet: (${arr[i]}, ${arr[j]}, ${arr[k]})`);
                    found = true;
                }
            }
        }
    }
    if (!found) console.log("No triplets found.");
}

const numbersArray = [-1, 2, -3, 1, 0, 5, -2, 3, -5];
findTriplets(numbersArray);
