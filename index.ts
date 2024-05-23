#! /usr/bin/env node

import inquirer from "inquirer";



let answers : {
    sentence : string
} = await inquirer.prompt(
    [
        {
            name : "sentence",
            message : "enter your sentence to count the word",
            type : "input",
        }
    ]
);
let words = answers.sentence.trim().split(" ")
// print the array of words to the console
console.log(words);
// print the word count of sentence to the console
console.log(`Your sentence words count is ${words.length}`);

        
    


