/*
* Author: Kari Kranich <kkranich@ucsc.edu>
* Created: 19 October
* License: Public DOman
*/


const outputEl = document.getElementById("output");

const new1El = document.createElement("p");
new1El.textContent = "Element 1";
new1El.style.color = "purple";

const new2El = document.createElement("q");
new2El.textContent = "Element 2";
new2El.style.color = "red";

outputEl.append(new1El, new2El);
