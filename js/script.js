'use strict'

function guestList() {
    let guestList = `Guests :
    Ivanna
    Ira
    Mary
    `;
    console.log (guestList);
let guest2List = 'Guests:\n Alex\nIvanna\nOxana\nNazar';
console.log (guest2List);

}

function getAllSymbol () {
    for (let newString of 'IwillSucceed') {
console.log (newString);

// for (let Ivanna of 'Max' ) {
//     console.log (Ivanna);
// }
    }
}

function СhangeTheCase () {
   
    console.log ('Interface'.toUpperCase());
}
function someSum (a,b){
    return a + b;

}
console.log (`Sum: ${someSum(4,7)}`);
function someString () {
    let text = 'Hello!'
    console.log (text.length);
    let firstSymbol = text[0];
    console.log (firstSymbol);
    let lastSymbol = text[5];
    console.log (lastSymbol);
    lastSymbol = text [4];
    console.log (lastSymbol);
    lastSymbol = text [2];
console.log (lastSymbol);
lastSymbol =text [text.length-1];
console.log (lastSymbol);
for (const num of text) {
    console.log (num);
}
console.log (text.toUpperCase());
console.log (text.toLowerCase());
console.log (text.toUpperCase());
console.log (text.slice(1,4));
console.log ( 'Hello'[0].toLowerCase());


} 

function freelancer () {
    let fls = 'freelancer';
    let text = `Hello! I am a ${fls}!`;
    console.log (text);
}
function freelanc () {
    let text = 'freelancer';
    console.log(text.indexOf ('n'));
    let lastSymbol = text [6];
    console.log (lastSymbol);
    let text2 = 123+ '456';
    console.log (text2);
    console.log (text.toUpperCase());
    console.log (text.includes ('cer'));
    console.log (text.startsWith ('ela'));
    console.log (text.slice(3,6));
    console.log (text.includes ('lan',4));

}
function ucFirst() {
    let str = 'vasyl';
    // str = 'V'+ str [1] + str [2] + str [3] + str [4];
    // console.log (str);
   let newStr = str [0].toUpperCase()+str.slice(1);
   console.log (newStr);
   let word = 'ivanna';
   let newWord = word [0].toUpperCase()+word.slice(1);
   console.log(newWord);
   let work = 'alex';
   let newwork = work[0].toUpperCase()+work.slice(1);
   console.log (newwork);

}