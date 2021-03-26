const readline = require('readline')

module.exports = async function prompt(message, input = process.stdin, output = process.stdout) {
  const rl = readline.createInterface({ input, output })

  return new Promise((resolve, reject) => {
    rl.question(message + ' ', (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}
