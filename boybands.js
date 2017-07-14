/**
 * Created by beelarr on 7/13/17.
 */



var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById('boy-bands');

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById('vegetables');;

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
    currentBand += bands[loopTracker];
    // console.log('inital band log', bands[loopTracker]);
    // console.log('inital veg log', vegetables[loopTracker]);
    currentVeggie += vegetables[loopTracker];

    bandElement.innerHTML = currentBand;
    veggieElement.innerHTML = currentVeggie;
    // console.log(currentBand);
    // console.log(currentVeggie);
}



