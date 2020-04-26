const readline = require("readline");
const input = process.stdin;
const output = process.stdout;

module.exports = async function prompt(message) {
  let returnAnswer = () => {};

  let answer = new Promise((resolve, reject) => {
    returnAnswer = (answer) => resolve(answer);
  });

  const rl = readline.createInterface({ input, output });
  rl.question(message + " ", (answer) => {
    rl.close();
    returnAnswer(answer);
  });

  return answer;
};
