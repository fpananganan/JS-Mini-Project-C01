// Mini JS Project C01 //

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeing = 'Good morning!';
} else {
    greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>'); 
