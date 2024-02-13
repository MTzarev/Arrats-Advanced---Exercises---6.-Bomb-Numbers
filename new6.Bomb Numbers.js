function bombNumbers(numbers, bomb) {
    let bombNum = bomb[0];
    let powerBomb = bomb[1];

    for (let i = 0; i < numbers.length; i++) {
        let curNum = numbers[i];

        if (curNum === bombNum) {
            let start = Math.max(0, i - powerBomb);
            let count = powerBomb * 2 + 1;

            numbers.splice(start, count);
            //i=i-powerBomb-1
        }
       
    }
    console.log(numbers.reduce((a, b) => a + b,0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
