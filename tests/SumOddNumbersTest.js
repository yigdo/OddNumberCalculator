// Tests for SumOddNumbers

import { SumOddNumbers } from "../index.js";

if(SumOddNumbers(0, 10) == 25){
    console.log('\x1b[32m \u2713 Test Case Passed \x1b[37m');
}else{
    console.log('\x1b[31m \u2713 Test Case Failed \x1b[37m');
}

if (SumOddNumbers(0, 100) == 2500) {
    console.log('\x1b[32m \u2713 Test Case Passed \x1b[37m');
}else{
    console.log('\x1b[31m \u2713 Test Case Failed \x1b[37m');
}