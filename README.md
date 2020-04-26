# basic-prompt
Simple prompt for Node.js console applications.

## Example
```javascript
const prompt = require("basic-prompt");

(async () => {
  let answer = await prompt("What's your question?");
  console.log(answer);

  process.exit();
})();
```
