const age = Number(prompt("What is your age?"));
const daysLived = age * 365;

const formattedDaysLived = daysLived.toLocaleString();

alert("You are approximately " + formattedDaysLived + " days old!");
