export function SumOddNumbers(rangeStart, rangeEnd){
    let calculation = 0;

    // Flip values in case of a typo
    if (rangeStart > rangeEnd) {
        [rangeStart, rangeEnd] = [rangeEnd, rangeStart]
    }

    for (let i = rangeStart; i < rangeEnd; i++) {
        if(i % 2 != 0){
            calculation += i;
        }
    }

    return calculation;
}

export function SumEvenNumbers(rangeStart, rangeEnd) {
    let calculation = 0;

    // Flip values in case of a typo
    if(rangeStart > rangeEnd){
        [rangeStart, rangeEnd] = [rangeEnd, rangeStart]
    }

    for (let i = rangeStart; i < rangeEnd; i++) {
        if (i % 2 == 0) {
            calculation += i;
        }
    }

    return calculation;
}

export function SumOddOrEvenNumbers(rangeStart, rangeEnd, isOdd){
    let calculation = 0;

    // Flip values in case of a typo
    if (rangeStart > rangeEnd) {
        [rangeStart, rangeEnd] = [rangeEnd, rangeStart]
    }

    for (let i = rangeStart; i < rangeEnd; i++) {
        if (isOdd == false && i % 2 == 0) {
            calculation += i;
        }else if(isOdd == true && i % 2 != 0){
            calculation += i;
        }
    }

    return calculation;
}