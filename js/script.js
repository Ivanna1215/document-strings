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

function newSearch () {
    let str = 'I want to go to Budapest for the weekend';
    let target = 'Budapest';
    let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `result ${foundPos}` );
  pos = foundPos + 1; 
    }
}

function search () {
    let str = 'I want to go to sea';
    
    console.log (str.indexOf ('want'));
}

function controlsearch () {
    let str = 'I really want to be slim';
    let target = 'slim';
    let pos = 0;
    while (true) {
        let search = str.indexOf(target,pos +1);
        if ( search==-1) break;
        alert (`Result :${search}`)
        pos = search + 1; 
    }


}



function myFunc(a,b) {
    const result = myFunc(3, 5);
return a + b;
}

function happyString () {
    let str = '';
    for (let i = 1; i<=8;i++) {
        for (let j = 1; j<=8;j++)
         str = str + '*';
     console.log (str);
     str = '';
    
    }
    
}