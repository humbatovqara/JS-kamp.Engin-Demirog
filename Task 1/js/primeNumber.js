/*
    Prime Number - Asal Sayı - Yalnız özünə və 1-ə qalıqsız bölünən rəqəmlər
*/

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 1) {
            console.log(`${numbers[i]} is not a prime number`)
        } else if (numbers[i] == 2) {
            console.log(`${numbers[i]} is a prime number`);
        } else if ((numbers[i] % numbers[i] == 0 || numbers[i] % 1 == 0) && numbers[i] % 2 != 0) {
            console.log(`${numbers[i]} is a prime number`);
        } else {
            console.log(`${numbers[i]} is not a prime number`);
        }
    }
}

findPrime(2, 3, 6, 55, -6, 78);
findPrime(2, 5, 8, 21, 13);
findPrime(1);