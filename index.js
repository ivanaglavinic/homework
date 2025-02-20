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
function listNumbers(amount) {
  for (let i = 0; i < amount; i++) {
    let numbers = "";
  }
}

listNumbers(24);

//WEEK 2 HOMEWORK

function getFullName(
  firstName,
  surname,
  useFormalName = false,
  gender = "male"
) {
  let fullname = firstName + " " + surname;

  //name not inserted
  if (!firstName || !surname) {
    return "Both first and last names are required!";
  }
  // adding formal name and gender
  if (useFormalName) {
    if (gender === "female") {
      return "Lady " + fullname;
    } else {
      return "Lord " + fullname;
    }
  } else {
    return fullname;
  }
}

getFullName("Benjamin", "Hughes");

let fullname1 = getFullName("Sarah", "Johnson", true, "female");
let fullname2 = getFullName("Mark", "Cuban", true, "male");

console.log(fullname1);
console.log(fullname2);

//
function getEventWeekday(daysFromToday) {
  const today = new Date();
  const todayDay = today.getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const eventDay = (todayDay + daysFromToday) % 7;

  return weekdays[eventDay];
}
console.log(getEventWeekday(4));

//

function whatShouldIWear(temperature) {
  if (temperature < 0) {
    return "coat, gloves, and a scarf";
  } else if (temperature >= 0 && temperature < 10) {
    return "jacket and warm pants";
  } else if (temperature >= 10 && temperature < 20) {
    return "sweater or a long-sleeve shirt";
  } else {
    return "shorts and a t-shirt";
  }
}
const clothesToWear = whatShouldIWear(15);
console.log("You should wear " + clothesToWear);

//

const class07Students = [];

function addStudentToClass(studentName) {
  // Check if studentName is empty
  if (studentName === "") {
    console.log("Cannot add an empty string to the class");
    return;
  }

  // if "Queen" is being added
  if (studentName === "Queen") {
    if (!class07Students.includes("Queen")) {
      class07Students.push(studentName);
    }
    return;
  }

  // if student is already in the class
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  // if class already has 6 students
  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }

  // Add the student
  class07Students.push(studentName);
}
// check how many students
function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Maria");
addStudentToClass("Ana");
addStudentToClass("Marko");
addStudentToClass("David");
addStudentToClass("Sara");
addStudentToClass("Frank");
addStudentToClass("Deborah");
addStudentToClass("Ana");
addStudentToClass("Queen");

console.log(getNumberOfStudents());
