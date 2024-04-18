#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([{
        name: "weight",
        message: chalk.yellow("Enter your weight in Kilograms."),
        type: "input"
    },
    {
        name: "height",
        message: chalk.yellow("Enter your height in Meters."),
        type: "input"
    }]);
const height = answer.height;
const weight = answer.weight;
//if weight and height is in number then execute else show error
if ((answer.weight === weight && answer.height === height) && (weight > 0 && height > 0)) {
    let result = answer.weight / (answer.height * answer.height);
    let bmi = result.toFixed(1);
    console.log(chalk.cyanBright(`\t\nYour weight : ${answer.weight} kg`));
    console.log(chalk.cyanBright(`Your height : ${answer.height} m\n\t`));
    console.log(chalk.bgGreen.bold(`\t\nYour Body Mass Index : ${bmi} kg/m**2\n\t`));
}
else {
    console.log(chalk.red.bold.italic("Error: Please enter a valid Numeric value."));
}
