function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

//week 1 java script

//exercise 1

const yearOfBirth = 1998;
const yearFuture = 2059;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

//exercise 2

const dogYearOfBirth = 2003;
const dogYearFuture = 2045;
const dogYear = dogYearFuture - dogYearOfBirth;

const shouldShowResultsInDogYears = true;
if (shouldShowResultsInDogYears) {
  dogYears = dogYear / 7;
} else {
  dogYears = dogYear;
}

console.log(
  "Your dog will be " + dogYear + " human years old in " + dogYearFuture
);
console.log(
  "Your dog will be " + dogYears + " dog years old in " + dogYearFuture
);

//exercise 3 HOUSE PRICEY

//Peter
let width = 8;
let depth = 10;
let height = 10;
let volumeInMeters = width * depth * height;
let gardenSizeInM2 = 100;

housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

console.log("Your house price should be " + housePrice + " euros");

//exercise 4 EZ NAMEY

const firstWords = [
  "Tech",
  "Spark",
  "Bold",
  "Urban",
  "Wave",
  "Path",
  "Labs",
  "Forge",
  "Prime",
  "Zen",
];
const secondWords = [
  "Vivid",
  "Rise",
  "Fusion",
  "Mind",
  "Shift",
  "Nex",
  "Horizon",
  "Pulse",
  "Bright",
  "Nova",
];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

const startupName =
  firstWords[randomNumber1] + " " + secondWords[randomNumber2];

console.log(
  "The startup: " +
    startupName +
    " contains " +
    startupName.length +
    " characters."
);

// exercise in class
const balance = 105;
let bankAccount;
if (balance <= 0) {
  console.log("Please deposit some money");
} else if (balance <= 1000) {
  console.log("Your balance is looking okay");
} else if (balance <= 3000) {
  console.log("Your balance is looking good");
} else if (balance <= 10000) {
  console.log("Your balance is fantastic");
} else {
  console.log("Your balance is AMAZING!");
}

//exercises in class
function getCircleArea(radius) {
  const circleArea = radius * radius * Math.PI;
  return circleArea;
}

const area = getCircleArea(20);

console.log(area);

function celciusToFahreneit(celsius) {
  return (9 / 5) * celsius + 32;
}
console.log(celciusToFahreneit(30));

//scope

const global = "global";
function scopeTest() {
  console.log(global);
  const functionScope = "functionScope";
  console.log(functionScope);
  function tester() {
    console.log(global);

    const testerVariable = "testerVariable";
    console.log(testerVariable);
  }

  tester();
}

scopeTest();


//for loop
function listNumbers(amount){
for (let i=0; i < amount; i++) {
let numbers = "";
}}

listNumbers(24);