//ЗАДАНИЕ 1

function pickPropArray(objects, property) {
    let result =[];
    for(let obj of objects)
        if (property in obj) result.push(obj[property]);
    return result;
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
 ]
 
 const result = pickPropArray(students, 'name')
 
 console.log(result) // [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]

 //ЗАДАНИЕ 2

 function createCounter() {
    let count = 0;  
    return function () {
        count++;
        console.log(count);
    }
}
  
const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2

//ЗАДАНИЕ 3

function spinWords(str) {
    let words = str.split(' ');
    for(let i=0; i < words.length; i++)
        if(words[i].length >= 5)
            words[i] = words[i].split('').reverse().join('');
    return words.join(' ');
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test

//ЗАДАНИЕ 4

function indexForSum(nums, target){
    for(let i = 0; i < nums.length; i++)
        for(let j = i+1; j < nums.length; j++)
           if (nums[i] + nums[j] == target)
               return [i, j];
    return("Такие числа не найдены");
}

let nums = [2,7,11,15];
let target = 9;
console.log(indexForSum(nums, target)); // [0,1]

//ЗАДАНИЕ 5 

function maxStr(str){
    let result = "";
    let word = "";
    for(let i = 0; i < str[0].length; i++){
        word = str[0][i];
        let j = i+1;
        while(str.every(x => x.includes(word))) {
            if (result.length < word.length) result = word;
            word += str[0][j];
            j++;
        }
    }
    if(result.length >= 2) return result;
    return("");
}

let strs = ["цветок","поток","хлопок"];
console.log(maxStr(strs)); // "ок"

strs = ["собака","гоночная машина","машина"]
console.log(maxStr(strs)); // ""