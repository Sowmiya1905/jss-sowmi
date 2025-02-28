// Calling the sayHello function three times

var sayHello;

sayHello = function () {
	console.log("Hello World!");
};

sayHello();
sayHello();
sayHello();

/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 */
sayHello = function () {
	console.log("Greetings, Earthlings!");
};

sayHello();
sayHello();
sayHello();

/* 2) Break the Hello World! message across two lines.
 */
sayHello = function () {
	console.log("Hello\nWorld!");
};

sayHello();
sayHello();
sayHello();

/* 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 */
var printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

printLetters();
