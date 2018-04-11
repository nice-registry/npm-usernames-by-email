#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const usernames = {}
const outputFile = path.join(__dirname, '../index.json')

require('owner-profiles').createReadStream()
  .on('data', ({key: username, value: profile}) => {
    const email = profile.email
    if (!email) return
    if (!usernames[email]) usernames[email] = []
    usernames[email].push(username)
    console.log(usernames[email])
  })
  .on('end', () => {
    fs.writeFileSync(outputFile, JSON.stringify(usernames, null, 2))
    console.log('wrote', outputFile)
  })
  .on('error', (err) => {
    console.error('error reading npm profiles', err)
  })
