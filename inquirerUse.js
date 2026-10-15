import inquirer from 'inquirer';

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',        // The type of prompt (input, list, confirm, etc.)
      name: 'username',     // The key name for the answer in the returned object
      message: 'What is your name?' // The question displayed to the user
    }
  ]);

  console.log(`Hello, ${answers.username}!`);
}

main();