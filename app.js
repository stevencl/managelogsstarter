const fs = require('fs');
const readline = require('readline');
const prompt = require('prompt-sync')({ sigint: true });


async function main() {
    let quit = false;
    while (!quit) {
        let choice = prompt(`Commands ` + '\n' + '1: View logs\n' + '2: Show log file details\n' + '3: Delete log file\n' + '-1: Quit\n' + 'Enter your command: ');
        choice = Number(choice);
        if (choice == -1) {
            quit = true;
        }
        else if (choice == 1) {
            //Implement the functionality to show contents of a log file
        }
        else if (choice == 2) {
            //Implement the functionality to show log file details
        }
        else if (choice == 3) {
            //Implement the functionality to delete a log file
        }
    }
}

main().catch((err) => {
    console.error("Error running sample:", err.message);
});