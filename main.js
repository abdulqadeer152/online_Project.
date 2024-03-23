import inquirer from "inquirer";
const guessNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussNumber",
        type: "number",
        message: "Please Guess A Number"
    }
]);
if (answer.userGussNumber === guessNumber) {
    console.log("Congtratulations! You guess Correct Number.");
}
else {
    console.log("You Guess Wrong Number.");
}
