/*
    Amicable Numbers - Arkadaş Sayılar
*/

let div = [];
let result = [];
let sum = 0;

function findAmicable(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i]; j++) {
            if (numbers[i] % j === 0) {
                div.push(j);
                sum += j;
            }
        }
        result.push(sum);
        console.log(`${numbers[i]} bölənləri : ${div}`);
        sum = 0;
        div = [];
    }

    if ((result[0] === numbers[1]) && (result[1] === numbers[0])) {
        console.log("It is Amicable Numbers");
    } else {
        console.log("It is not Amicable Numbers");
    }
}

findAmicable(1184, 1210);