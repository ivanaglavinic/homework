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

const startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];

console.log(
  "The startup: " +
    startupName +
    " contains " +
    startupName.length +
    " characters."
);
