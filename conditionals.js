const temperature = -4;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!")
} else {
  console.log("Short sleeves are fine");
}

console.log("Now you're ready to go outside");

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside is not such a good idea");
}

const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine");
}

console.log("Now you're ready to go outside!");

if (!raining) {
  console.log("leave your umbrella at home!");
}