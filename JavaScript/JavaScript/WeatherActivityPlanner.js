let temperature = 25;
let isRaining = false;
let windSpeed = 20;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
}
else if (temperature > 35) {
    console.log("Go swimming.");
}
else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
}
else if ((temperature >= 20 && temperature <= 35) || (windSpeed <= 15 && !isRaining)) {
    console.log("Perfect day for a walk.");
}
else {
    console.log("Perfect day for a walk")
}