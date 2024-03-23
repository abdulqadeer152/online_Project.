#! /usr / bin / env node 
import inquirer from "inquirer";


const answer = await inquirer.prompt([
    {message: "Enter First Number", type: "Number", name: "Firstnumber"},
    {message: "Enter Second Number", type: "number", name: "Secondnumber"},
    {message: "Select one of the operator to perform action", 
type: "list",
name: "operator",
choices: ["Addiion", "Subtraction", "Multiplication", "Division"],
},
]);

// Additional Statement

if(answer.operator === "Addition"){
    console.log(answer.Firstnumber + answer.Secondnumber);
} else if (answer.operator === "Subtraction"){
    console.log(answer.Firstnumber - answer.Secondnumber);
} else if (answer.operator === "Multiplication"){
    console.log(answer.Firstnumber * answer.Secondnumber);
} else if (answer.operator === "Division"){
    console.log(answer.Firstnumber / answer.Secondnumber);
} else{
    console.log("Please select valid operator");
}
