const input = process.stdin;
const output = process.stdout;

input.setEncoding("utf8").pause();
output.setEncoding("utf8");

module.exports = async function prompt(message) {
  output.write(message + " "); // add a space between the question and the cursor

  let returnLine;

  let answer = new Promise((resolve, reject) => {
    returnLine = (line) => {
      resolve(line.replace(/(\r\n|\n|\r)$/, "")); // remove line break
    };
  });

  input.once("data", (line) => {
    input.pause();
    returnLine(line);
  });

  input.resume();

  return answer;
};
