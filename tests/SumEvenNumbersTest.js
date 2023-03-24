// Tests for SumOddNumbers

import { SumEvenNumbers } from "../index.js";

if (SumEvenNumbers(0, 10) == 20) {
    console.log('\x1b[32m \u2713 Test Case Passed \x1b[37m');
} else {
    console.log('\x1b[31m \u2713 Test Case Failed! Got result: ' + SumEvenNumbers(0, 10) + ' \x1b[37m');
}

if (SumEvenNumbers(0, 100) == 2450) {
    console.log('\x1b[32m \u2713 Test Case Passed \x1b[37m');
} else {
    console.log('\x1b[31m \u2713 Test Case Failed! Got result: ' + SumEvenNumbers(0, 100) + ' \x1b[37m');
}
