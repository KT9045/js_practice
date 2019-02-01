// let greetings;
// alert(greetings);

// Data Types: 
// string
// boolean - true, false
// number
// null
// undefined
// Object
// Symbol
let greetings = '10' - '15';
alert(greetings);

const name = prompt('Enter your name');
const msg = 'Hello, ' + name;
alert(msg);

const age = parseFloat(prompt('Enter your age'));
// Зробити змінну, яка буде містити вік + 1
// Вивести результат на екран
// const newAge = age + 1;
alert('You are ' + checkAge(age));


function add(a, b, c) {
    const res = a + b + c;
    return res;
}

const total = add(2, 2, 3);
// alert(total);

function checkAge(age) {
    if (age <= 18) {
        return 'child';
    } else {
        return 'adult';
    }
}


const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));
const result = solveQuardEq(a, b, c);
alert(result1,result2);

function solveQuardEq(a, b, c) {
    const diskr = calcDisk(a, b, c);
    
    if (diskr>0) { 
        result1= x1 = (-b - Math.sqrt(diskr))/(2*a);
        result2= x2 = (-b + Math. sqrt(diskr))/(2*a);
    else if (diskr<0) {
        return alert('try again')
    }
   
    }
}

function calcDisk(a, b, c) {
    return b * b - 4 * a * c;

    
}


    


// Добути квадратний корінь
// Math.sqrt(81)