export function SumOddNumbers(rangeStart, rangeEnd){
    let calculation = 0;
    for (let i = rangeStart; i < rangeEnd; i++) {
        if(i % 2 != 0){
            calculation += i;
        }
    }

    return calculation;
}

export function SumEvenNumbers(rangeStart, rangeEnd) {
    let calculation = 0;
    for (let i = rangeStart; i < rangeEnd; i++) {
        if (i % 2 == 0) {
            calculation += i;
        }
    }

    return calculation;
}
