/*
    All Prime Number - 1000-e kadar tüm asal sayılar
*/

function allPrimeNumber () {
    for (let i = 2; i <= 1000; i++) {
        if ((i % i == 0 || i % 1 == 0) && (i % 2 != 0)) {
            console.log(`${i} is a prime number`);
        }
    }
}

allPrimeNumber();