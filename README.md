# basic-prompt
Simple prompt for Node.js console applications.

## Example
#### Code
```javascript
const prompt = require("basic-prompt");

(async () => {
  let answer = await prompt("What's your question?");
  console.log(answer);

  process.exit();
})();
```
#### Result
```
What's your question? What's your answer?
What's your answer?
```
