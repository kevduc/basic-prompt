// const prompt = require('basic-prompt')
const prompt = require('./index.js');

(async () => {
  const answer = await prompt("What's your answer?")
  console.log(`Your answer: ${answer}`)
})()
