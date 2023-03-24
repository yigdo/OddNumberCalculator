// Tests for SumOddNumbers

import { SumOddOrEvenNumbers } from "../index.js";

if (SumOddOrEvenNumbers(0, 10, true) == 25) {
    console.log('\x1b[32m \u2713 Test Case Passed \x1b[37m');
} else {
    console.log('\x1b[31m \u2713 Test Case Failed! Got result: ' + SumOddNumbers(0, 10, true) + ' \x1b[37m');
}

if (SumOddOrEvenNumbers(0, 100, false) == 2450) {
    console.log('\x1b[32m \u2713 Test Case Passed \x1b[37m');
} else {
    console.log('\x1b[31m \u2713 Test Case Failed! Got result: ' + SumOddOrEvenNumbers(0, 100, false) + ' \x1b[37m');
}