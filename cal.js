"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let calculation = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "num1",
        message: "enter youtr first number"
    },
    {
        type: "number",
        name: "num2",
        message: "enter youtr second number"
    },
    {
        type: "list",
        name: "operator",
        message: "select your operation",
        choices: ["sum", " subtract", "multiply", "divide"]
    },
]);
if (calculation.opetation === "sum") {
    console.log(`${calculation.num1}+${calculation.num2}= ${calculation.num1 + calculation.num2}`);
}
else if (calculation.opetation === "subtract") {
    console.log(`${calculation.num1} - ${calculation.num2} = ${calculation.num1 - calculation.num2}`);
}
else if (calculation.opetation === "Multiply") {
    console.log(`${calculation.num1} * ${calculation.num2} = ${calculation.num1 * calculation.num2}`);
}
else if (calculation.opetation === "divide") {
    console.log(`${calculation.num1} / ${calculation.num2} = ${calculation.num1 / calculation.num2}`);
}
