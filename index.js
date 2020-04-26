const stdin = process.stdin;
const stdout = process.stdout;

stdin.setEncoding("utf8").pause();
stdout.setEncoding("utf8");

module.exports = async function prompt(message) {
  stdout.write(message + " "); // add a space between the question and the cursor

  let returnLine;

  let answer = new Promise((resolve, reject) => {
    returnLine = (line) => {
      resolve(line.replace(/(\r\n|\n|\r)$/, "")); // remove line break
    };
  });

  stdin.once("data", (line) => {
    stdin.pause();
    returnLine(line);
  });

  stdin.resume();

  return answer;
};
