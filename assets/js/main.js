// Lvl1_1

// for (x = 1; x <= 10; x++) {
//     console.log('Hello World ' + x);
// }

// Lvl1_2

// let numArray = [];

// for (x = 0; x <= 10; x++) {
//     numArray.push(x);
// }

// console.log(numArray);

// let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];

// for (x = 0; x <= 6; x++) {
//     console.log(names[x]);
// }

// Lvl1_6

// let retArray = [];

// for (x = 1; x <= 100; x++) {
//     retArray.push(`image_${x}.jpg`);
// }

// console.log(retArray);

// Lvl1_7

// let x = 1;
// do {
//     console.log(`The number is ${x}`);
//     x++
// }
// while (x < 6);

// Lvl1_8

// let output = document.getElementById("output");

// let x = 1;
// do {
//     if (x % 2 == 0) {
//         console.log(x);
//         document.getElementById("output").innerHTML += `<p>${x}</p>`;
//     }
//     x++;
// } while (x < 21);

// Lvl1_9

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']
let inputNumber = document.getElementById('input_number');
let output = document.getElementById('output');

let wordPrint = () => {
    output.innerHTML = '';
    for (x = 0; x < words.length; x++) {
        if (inputNumber.value == words[x].length) { output.innerHTML += `<p>${words[x]}</p>`; }
    }
}

