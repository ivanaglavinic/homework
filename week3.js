
//exercise 1

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
if (names.includes(nameToRemove)) {
  for (let index = 0; index < names.length; index++) {
    if (names[index] === nameToRemove) {
      delete names[index];
      for (let s = index; s < names.length - 1; s++) {
        names[s] = names[s + 1];
      }
      names.length--;
      break;
    }
  }
}
// Code done

console.log(names);

//exercise 2

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime =
  travelInformation.destinationDistance / travelInformation.speed;
const hours = Math.floor(travelTime);
const minutes = Math.round((travelTime - hours) * 60);
const finalTime = hours + " hours and " + minutes + " minutes";

console.log(finalTime);

//exercise 3

const seriesDurations = [
  {
    title: "Suits",
    days: 3,
    hours: 21,
    minutes: 48,
  },
  {
    title: "The Rookie",
    days: 3,
    hours: 11,
    minutes: 51,
  },
  {
    title: "Reign",
    days: 2,
    hours: 6,
    minutes: 36,
  },
];

function logOutSeriesText() {
  const totalMinutesInLifetime = 80 * 365.25 * 24 * 60;

  let totalLifePercentage = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const shows = seriesDurations[i];
    const totalSeriesMinutes =
      shows.days * 24 * 60 + shows.hours * 60 + shows.minutes;
    const showsLifePercentage =
      (totalSeriesMinutes / totalMinutesInLifetime) * 100;

    console.log(
      `${shows.title} took ${showsLifePercentage.toFixed(3)}% of my life`
    );
    totalLifePercentage += showsLifePercentage;
  }

  console.log(`In total that is ${totalLifePercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();

//exercise 4

const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}
function getNote(id) {
  if (typeof id !== "number" || isNaN(id)) {
    console.log("Error: The id should be a valid number.");
    return;
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  console.log("Error: No note found with that id.");
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

const firstNote = getNote(1);
console.log(firstNote);

const secondNote = getNote(2);
console.log(secondNote);

logOutNotesFormatted();
