// Задание 1

let name = "Aldiyar";
const age = 22;
var isStudent = true

// Задание 2

const PI = 3.14159;
const radius = 5;
const circumference = 2 * PI * radius;

console.log(`Длина окружности с радиусом ${radius} равна ${circumference}`);

// Задание 3
const stringValue = "Привет, Астана!";
const numberValue = 22;
const booleanValue = false;
const nullValue = null;
let undefinedValue;

console.log(`Тип stringValue: ${typeof stringValue}`);
console.log(`Тип numberValue: ${typeof numberValue}`);
console.log(`Тип booleanValue: ${typeof booleanValue}`);
console.log(`Тип nullValue: ${typeof nullValue}`);
console.log(`Тип undefinedValue: ${typeof undefinedValue}`);

// Задание 4
const book = {
    title: "Форрест Гамп",
    author: "Уинстон Грум",
    year: 1986,
  };
  
  console.log(`Название: ${book.title}`);
  console.log(`Автор: ${book.author}`);
  console.log(`Год издания: ${book.year}`);
  
  // Задание 4.1
const numbers = [12, 14, 22];
const sum = numbers[0] + numbers[1] + numbers[2];

console.log(`Сумма чисел: ${sum}`);

// Задание 4.2
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  const result = addNumbers(6, 6);
  console.log(`Сумма чисел: ${result}`);
  
// Задание 5
const myname = "Алдияр";
const myage = 22;
const city = "Астана";
const personInfo = `Меня зовут ${myname}, мне ${myage} лет, и я живу в городе ${city}.`;

console.log(personInfo);

// Задание 6
function createMyPersonInfo(name, age, city) {
    return `Меня зовут ${name}, мне ${age} лет, и я живу в городе ${city}.`;
  }
  const myPersonInfo = createMyPersonInfo("Алдияр", 22, "Астана");

  console.log(myPersonInfo);
  