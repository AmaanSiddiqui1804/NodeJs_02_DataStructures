// 2. Write a Program to generate a birth month of 50 individuals

// between the year 92 & 93. Find all the individuals having birthdays
// in the same month. Store it to finally print.

function generateRandomMonth() {
    return Math.floor(Math.random() * 12) + 1; // 1 to 12
}

const birthMonths = new Map(); //Declaring Map

// Initialize map with empty arrays for each month
for (let i = 1; i <= 12; i++) {
    birthMonths.set(i, []);
}

// Assigning 50 individuals random birth months
for (let person = 1; person <= 50; person++) {
    let month = generateRandomMonth();
    birthMonths.get(month).push(person);
}

// Required Result
console.log("Individuals grouped by birth month:");
for (let [month, people] of birthMonths.entries()) {
    console.log(`Month ${month}:`, people);
}
