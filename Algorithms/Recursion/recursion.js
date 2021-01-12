
//3 RULES OF RECURSIVE FUNCTIONS
// Identify the base case
// Identify the recursive case
// Get closer and closer and return when needed. Usually you have two retuns i.e in the both the base and return case

//Take note of these rules inside the recursive functions below. You will find them to be true.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FACTORIAL

// Write a funtion that returns the factorial value of the input number
//5! = 5 * 4 * 3 * 2 * 1 = 120
//factorial(5) = 120


function findFactorialRecursive(number) {
    //base case
    if(number === 2) {
        return 2;
    }
    // recursive case
    return number * findFactorialRecursive(number -1);
}

findFactorialRecursive(5);


function findFactorialIterative(number) {
    let answer = 1;
    if( number === 2 ) {
        let answer = 2;
    }
    for( let i = 2; i <= number; i++ ) {
        answer = answer * i;
    }
    return answer;
}

findFactorialIterative(5);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FIBONACCI SEQUENCE

//Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 . . . 
//the pattern of the sequence is that each value is the sum of the 2 previous values, that means that
//for N = 5 -> 2 + 3

function fibonacciIterative(n) {
    let arr = [0, 1];
    //base case
    for(let i = 2; i++; i < n + 1) {
        arr.push(arr[i-2] + [i-1]);
    }
    return [n];

}
fibonacciIterative(3);



function fibonacciRecursive(n) {
    //base case
    if ( n < 2 ) {
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
fibonacciRecursive(3);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//REVERSE STRING

//Implement a function that reverses a string using iteration...and then recursion!

function reverseString(str) {
    let arrayStr = str.split('');
    let reversedArray = [];
    //We are using closure here so that we don't add the above variables to the global scope
    function addToArray(array) {
        if(arrayStr.length > 0) {
            reversedArray.push(array.pop());
            addToArray(array);
        }
        return;
    }
    addToArray(arrayStr);
    return reversedArray.join('');
}

reverseString('yoyo mastery')
//should return: 'yretsam oyoy'


function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }
  
  reverseStringRecursive('yoyo master');
