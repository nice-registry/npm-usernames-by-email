const args = process.argv.slice(2)
const usernames = require('.')

if (!args.length || args.length > 1) {
  console.log('Usage: npm-username <email>')
  process.exit()
} else {
  const email = args[0]
  const results = usernames[email]
  if (!results.length) {
    console.log('no user found with email', email)
    process.exit()
  }
  results.forEach(username => console.log(username))
}