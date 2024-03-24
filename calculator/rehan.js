"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
while (true) {
    var no1 = parseFloat(prompt("Enter 1st Number: "));
    var op = prompt("Enter Operator(+, -, *, /, %): ");
    var no2 = parseFloat(prompt("Enter 2nD Number: "));
    switch (op) {
        case '+':
            {
                var cal = no1 + no2;
                console.log("Answer is: " + cal);
                break;
            }
        case '-':
            {
                var cal = no1 - no2;
                console.log("Answer is: " + cal);
                break;
            }
        case '-':
            {
                var cal = no1 - no2;
                console.log("Answer is: " + cal);
                break;
            }
        case '*':
            {
                var cal = no1 * no2;
                console.log("Answer is: " + cal);
                break;
            }
        case '/':
            {
                var cal = no1 / no2;
                console.log("Answer is: " + cal);
                break;
            }
        case '%':
            {
                var cal = no1 % no2;
                console.log("Answer is: " + cal);
                break;
            }
        default:
            console.log("Syntax Error");
    }
}
