/*
    Perfect Number - Mükemmel Sayılar
*/

function perfectNumber() {
    for (let i = 1; i <= 1000; i++) {
        let sum = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                sum += j;
            }
        }
        if (sum == i) {
            console.log(`${[i]} is a perfect number`);
        }
    }
}

perfectNumber();