//3. Extend the Prime Factorization Program to store all the Prime Factors of a
// number n into an array and finally display the output.


function primeFactorization(n) {
    let num = n;
    const factors = [];

    if (num <= 0 || isNaN(num)) {
        console.log("Invalid Input");
        return;
    }

    // Removing factors of 2
    while (num % 2 === 0) {
        factors.push(2);
        num /= 2;
    }

    // Checking for odd factors
    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }

    // If num > 2, it is a prime factor itself
    if (num > 2) {
        factors.push(num);
    }

    console.log(`Prime Factors of ${n}:`, factors);
}

const n = parseInt(process.argv[2]);
primeFactorization(n);
