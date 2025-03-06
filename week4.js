// Global variables
let name = "";
let todos = [];
let timerId = null;

function getReply(command) {
  command = command.toLowerCase().trim();
  if (command.startsWith("hello my name is")) {
    const userName = command.replace("hello my name is", "").trim();
    name = userName;
    return `Nice to meet you ${name.charAt(0).toUpperCase() + name.slice(1)}`;
  }
  if (command === "what is my name?") {
    if (!name) {
      return "I don't know your name yet.";
    } else {
      return `Your name is ${name.charAt(0).toUpperCase() + name.slice(1)}`;
    }
  }
  if (command.startsWith("add") && command.includes("to my todo")) {
    const task = command.replace("add", "").replace("to my todo", "").trim();
    todos.push(task);
    return `${
      task.charAt(0).toUpperCase() + task.slice(1)
    } added to your todo.`;
  }
  if (command.startsWith("remove") && command.includes("from my todo")) {
    const task = command
      .replace("remove", "")
      .replace("from my todo", "")
      .trim();
    todos = todos.filter((todo) => todo !== task);
    return `Removed ${
      task.charAt(0).toUpperCase() + task.slice(1)
    } from your todo.`;
  }
  if (command === "what is on my todo?") {
    if (todos.length === 0) {
      return "Your todo list is empty.";
    } else {
      return `You have the following tasks in your todo: ${todos.join(", ")}.`;
    }
  }
  if (command === "what day is it today?") {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
  }
  const mathAdd = command.match(/what is (\d+) \+ (\d+)/);
  if (mathAdd) {
    const result = Number(mathAdd[1]) + Number(mathAdd[2]);
    return result;
  }
  const mathMult = command.match(/what is (\d+) \* (\d+)/);
  if (mathMult) {
    const result = Number(mathMult[1]) * Number(mathMult[2]);
    parseInt;
    return result;
  }
  if (command.startsWith("set a timer for")) {
    const minutesMatch = command.match(/set a timer for (\d+) minutes/);
    if (minutesMatch) {
      const minutes = Number(minutesMatch[1]);
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        console.log("Timer done");
      }, minutes * 60 * 1000);
      return `Timer set for ${minutes} minutes.`;
    }
  }
  return "Sorry, I didn't understand that command.";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("What is 4 * 12?"));
console.log(getReply("Set a timer for 4 minutes"));
