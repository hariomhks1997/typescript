"use strict";
const num1element1 = document.getElementById('num1');
const num1element2 = document.getElementById('num2');
const buttonelement = document.querySelector('button');
const numresult = [];
const textresult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
//console.log(add(1, 6));
//console.log(add('1', '6'));
function printresult(resultobj) {
    console.log(resultobj.val);
}
buttonelement.addEventListener('click', () => {
    const num1 = num1element1.value;
    const num2 = num1element2.value;
    const result = add(+num1, +num2);
    numresult.push(result);
    const stringresult = add(num1, num2);
    textresult.push(stringresult);
    printresult({ val: result, timestamp: new Date() });
    console.log(numresult, "244", textresult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked!  ");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split("w"));
});
