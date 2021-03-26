# basic-prompt
Simple prompt for Node.js console applications.

## Example
#### Code
```javascript
const prompt = require("basic-prompt");

(async () => {
  const answer = await prompt("What's your answer?")
  console.log(`Your answer: ${answer}`)
})()
```
#### Result
```
What's your answer? 42
Your answer: 42
```
