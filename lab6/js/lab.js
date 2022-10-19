/*
* Author: Kari Kranich <kkranich@ucsc.edu>
* Created: 19 October
* License: Public DOman
*/

// Define Variables
myTransport = ["chrysler PT Cruiser", "bike", "walking", "bus"];

myMainRide = {
  make: "chrysler",
  model: "PT Cruiser",
  color: "Rusty",
  year: 1995,


// Calculate

  age: 2022

// Output
  }

// output
document.writeln("Kinds of transportation I use:" + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
