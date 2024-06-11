#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.yellow.bold.underline("\n\t\t\tWELCOME TO MY OOP!\n"));
do {
    let ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: chalk.green.bold.italic("Who would you like to talk to?\n"),
        choices: ["Myself", "A Student", "A Teacher", "Exit"]
    });
    if (ans.select == "Myself") {
        console.log(chalk.bold.italic.red("Hello! I'm talking to myself, how do you do...\n"));
        console.log(chalk.bold.magenta("-------------------------------------------\n"));
    }
    else if (ans.select == "A Student") {
        let me = await inquirer.prompt({
            type: "input",
            name: "name",
            message: chalk.green.bold.italic("Enter student name: ")
        });
        console.log(chalk.red.bold.italic(`Hello! My name is ${me.name} and I'm doing great, thank you!\n `));
        console.log(chalk.bold.magenta("-------------------------------------------\n"));
    }
    else if (ans.select == "A Teacher") {
        let me = await inquirer.prompt({
            type: "input",
            name: "name",
            message: chalk.green.bold.italic("Enter your teacher name: ")
        });
        console.log(chalk.red.bold.italic(`Hello! My name is ${me.name} and I'm doing fantastic, thank you for asking!\n `));
        console.log(chalk.bold.magenta("-------------------------------------------\n"));
    }
    else if (ans.select == "Exit") {
        console.log(chalk.italic.bold.bgRedBright("\n\t\t\tThank you for chatting! Take care of yourself!\n"));
        break;
    }
} while (true);
