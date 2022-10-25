/*
* Author: Kari Kranich <kkranich@ucsc.edu>
* Created: 19 October
* License: Public DOman
*/

function add_ten(x){
  return x + 10;
}

array = [5,10,20,30];

// output
document.writeln("Original Array:", array, "</br>");

map_array = array.map(add_ten);
document.writeln("Mapped +10 Array: ", map_array, "</br>");
